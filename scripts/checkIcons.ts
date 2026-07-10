#!/usr/bin/env node
/**
 * Script: checkIcons.ts
 *
 * Description:
 *  - Enforces the shared icon template contract across every src/lib/icons/*.svelte file.
 *  - The icons are deliberately self-contained (no shared base component - the
 *    shadcn-registry and copy-from-website install paths ship a single .svelte file
 *    per icon), so this checker is the substitute for a base component: it makes
 *    template drift impossible to land silently.
 *  - Uses plain string checks (no Svelte parser) because the contract is literal
 *    text produced by the codemods in earlier plans.
 *
 * Script-block rules:
 *  1. imports IconProps from './types.js'
 *  2. destructure contains all of: color = 'currentColor', size = 24, strokeWidth = 2,
 *     animate: animateProp = false, class: className = ''
 *  3. no write to animateProp outside the destructure (no `animateProp =` besides the
 *     one produced by the destructure default)
 *  4. every setTimeout is paired with a clearTimeout in the same file
 *  5. the union pattern `animateProp ||` appears at least once (script or markup),
 *     UNLESS the file is on the ANIMATE_UNION_ALLOWLIST below (see comment there)
 *
 * Markup rules:
 *  6. exactly one role="img", carrying aria-label="<basename>"
 *  7. exactly one <svg, with viewBox="0 0 24 24", width={size}, height={size},
 *     stroke={color}, stroke-width={strokeWidth}
 */

import { readFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = join(__dirname, '../src/lib/icons');

/**
 * Documented exception to rule 5.
 *
 * sliders-horizontal.svelte and sliders-vertical.svelte drive their hover animation
 * from an untrack'd $effect that branches on `animateProp` directly
 * (`if (animateProp) untrack(handleMouseEnter); else untrack(handleMouseLeave);`)
 * instead of unioning it into a $derived boolean or a `class:animate={animateProp || x}`
 * markup binding. There is no `animateProp ||` substring anywhere in either file, so
 * they cannot satisfy rule 5's literal-text check. For these two files only, rule 5 is
 * replaced by a check that `animateProp` is read inside an `if (` condition, which is
 * the shape their effect-bridge takes.
 *
 * eye.svelte and binary.svelte are also bespoke (custom animation drivers) but both
 * union the prop inline in markup (`class:animate={animateProp || animating}` /
 * `class:animate={animateProp || hovered}`), so they already satisfy the literal rule
 * 5 substring check without needing an entry here.
 */
const ANIMATE_UNION_ALLOWLIST = new Set(['sliders-horizontal.svelte', 'sliders-vertical.svelte']);

interface Violation {
	file: string;
	rule: string;
	message: string;
}

function countOccurrences(haystack: string, needle: string): number {
	if (needle === '') return 0;
	let count = 0;
	let index = 0;
	while ((index = haystack.indexOf(needle, index)) !== -1) {
		count += 1;
		index += needle.length;
	}
	return count;
}

function checkIcon(file: string, source: string): Violation[] {
	const violations: Violation[] = [];
	const base = basename(file, '.svelte');

	const push = (rule: string, message: string) => violations.push({ file, rule, message });

	// Rule 1: IconProps import
	if (!source.includes("import type { IconProps } from './types.js';")) {
		push('rule-1', "missing `import type { IconProps } from './types.js';`");
	}

	// Rule 2: destructure defaults
	const requiredDefaults = [
		"color = 'currentColor'",
		'size = 24',
		'strokeWidth = 2',
		'animate: animateProp = false',
		"class: className = ''"
	];
	for (const pattern of requiredDefaults) {
		if (!source.includes(pattern)) {
			push('rule-2', `destructure missing \`${pattern}\``);
		}
	}

	// Rule 3: no prop writes to animateProp outside the destructure default.
	// The destructure itself contributes exactly one `animateProp =` occurrence
	// (`animate: animateProp = false`); any additional occurrence is a write.
	const animatePropAssignments = countOccurrences(source, 'animateProp =');
	if (animatePropAssignments > 1) {
		push(
			'rule-3',
			`found ${animatePropAssignments} occurrences of \`animateProp =\`, expected 1 (the destructure default); animateProp must not be reassigned`
		);
	}

	// Rule 4: setTimeout must be paired with clearTimeout
	const setTimeoutCount = countOccurrences(source, 'setTimeout');
	const clearTimeoutCount = countOccurrences(source, 'clearTimeout');
	if (setTimeoutCount > 0 && clearTimeoutCount === 0) {
		push('rule-4', 'uses setTimeout without a matching clearTimeout');
	}

	// Rule 5: animateProp union pattern (with documented allowlist)
	if (ANIMATE_UNION_ALLOWLIST.has(file)) {
		if (!/if\s*\(\s*animateProp\s*\)/.test(source)) {
			push(
				'rule-5',
				'allowlisted effect-bridge file must branch on `if (animateProp)` in place of the `animateProp ||` union'
			);
		}
	} else if (!source.includes('animateProp ||')) {
		push('rule-5', 'missing `animateProp ||` union pattern');
	}

	// Rule 6: exactly one role="img" carrying the correct aria-label
	const roleImgCount = countOccurrences(source, 'role="img"');
	if (roleImgCount !== 1) {
		push('rule-6', `expected exactly one \`role="img"\`, found ${roleImgCount}`);
	}
	const ariaLabelPattern = `aria-label="${base}"`;
	if (!source.includes(ariaLabelPattern)) {
		push('rule-6', `missing \`${ariaLabelPattern}\``);
	}

	// Rule 7: exactly one <svg with the required attribute bindings
	const svgCount = countOccurrences(source, '<svg');
	if (svgCount !== 1) {
		push('rule-7', `expected exactly one \`<svg\`, found ${svgCount}`);
	}
	const requiredSvgAttrs = [
		'viewBox="0 0 24 24"',
		'width={size}',
		'height={size}',
		'stroke={color}',
		'stroke-width={strokeWidth}'
	];
	for (const attr of requiredSvgAttrs) {
		if (!source.includes(attr)) {
			push('rule-7', `<svg> missing \`${attr}\``);
		}
	}

	return violations;
}

const files = readdirSync(iconsDir)
	.filter((f) => f.endsWith('.svelte'))
	.sort();

const allViolations: Violation[] = [];

for (const file of files) {
	const source = readFileSync(join(iconsDir, file), 'utf-8');
	allViolations.push(...checkIcon(file, source));
}

for (const v of allViolations) {
	console.log(`${v.file}: ${v.rule} ${v.message}`);
}

console.log(`${files.length} icons checked, ${allViolations.length} violations`);

if (allViolations.length > 0) {
	process.exit(1);
} else {
	console.log(`${files.length} icons conform`);
	process.exit(0);
}

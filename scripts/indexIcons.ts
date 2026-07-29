#!/usr/bin/env node
/**
 * Script: indexIcons.ts
 *
 * Description:
 *  - Reads every .svelte file in "src/lib/icons".
 *  - For each file, looks for a corresponding JSON file in a Lucide checkout's
 *    "icons" directory (using the same basename) and, if found, reads its
 *    "tags" and "categories".
 *  - Regenerates "src/lib-docs/icons-meta.ts" from scratch every run: one
 *    sorted import per icon and a sorted ICONS_LIST array of
 *    { name, icon, tags, categories }. The previous contents of that file are
 *    never read for data, so a stray apostrophe in a tag or a regex-metachar
 *    icon name can't silently corrupt or drop an entry.
 *
 * Lucide checkout location, in order of precedence:
 *  1. LUCIDE_ICONS_DIR environment variable (path to the checkout's "icons" dir)
 *  2. "../lucide/icons" relative to the current working directory
 *
 * By default this script never touches the Lucide checkout's git state. Pass
 * --pull to run "git pull" in it first; a failed pull only warns (useful when
 * offline) and indexing continues against whatever is on disk.
 *
 * Import variable names are converted to camelCase.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, basename, dirname, resolve } from 'path';
import { execSync } from 'child_process';
import { pathToFileURL } from 'url';

interface LucideIconData {
	tags?: string[];
	categories?: string[];
}

interface IconEntry {
	name: string;
	importVar: string;
	fileName: string;
	tags: string[];
	categories: string[];
}

export interface GenerateIconsMetaOptions {
	/** Directory containing the .svelte icon files (e.g. src/lib/icons). */
	iconsDir: string;
	/** Directory containing Lucide's per-icon JSON metadata (a Lucide checkout's "icons" dir). */
	lucideIconsDir: string;
	/** Path to write the generated icons-meta.ts file to. */
	outFile: string;
}

export interface GenerateIconsMetaResult {
	total: number;
	matched: number;
	unmatchedIcons: string[];
	added: number;
	removed: number;
}

function toCamelCase(str: string): string {
	return str
		.split('-')
		.map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
		.join('');
}

/**
 * Best-effort diff against whatever is currently on disk, used only to log
 * added/removed counts. This looks at icon *names* only (never tags,
 * categories, or import identifiers), so it cannot corrupt or drop data - at
 * worst the logged counts are off, which is not a correctness concern.
 */
function diffExistingNames(
	outFile: string,
	currentNames: Set<string>
): { added: number; removed: number } {
	if (!existsSync(outFile)) {
		return { added: currentNames.size, removed: 0 };
	}

	try {
		const previousContent = readFileSync(outFile, 'utf8');
		const previousNames = new Set<string>();
		for (const match of previousContent.matchAll(/name:\s*'([^']*)'/g)) {
			previousNames.add(match[1]);
		}

		let added = 0;
		let removed = 0;
		for (const name of currentNames) {
			if (!previousNames.has(name)) added++;
		}
		for (const name of previousNames) {
			if (!currentNames.has(name)) removed++;
		}
		return { added, removed };
	} catch {
		return { added: 0, removed: 0 };
	}
}

/**
 * Regenerates the icons-meta.ts file at `outFile` from scratch: every
 * .svelte file in `iconsDir` becomes one entry, enriched with tags and
 * categories from the matching JSON file in `lucideIconsDir` (if any).
 */
export function generateIconsMeta({
	iconsDir,
	lucideIconsDir,
	outFile
}: GenerateIconsMetaOptions): GenerateIconsMetaResult {
	const svelteFiles = readdirSync(iconsDir).filter((file) => file.endsWith('.svelte'));
	const unmatchedIcons: string[] = [];

	const entries: IconEntry[] = svelteFiles.map((file) => {
		const iconName = basename(file, '.svelte');
		const importVar = toCamelCase(iconName);
		const lucideFilePath = join(lucideIconsDir, `${iconName}.json`);

		let tags: string[] = [];
		let categories: string[] = [];

		if (existsSync(lucideFilePath)) {
			try {
				const jsonData = JSON.parse(readFileSync(lucideFilePath, 'utf8')) as LucideIconData;
				tags = jsonData.tags ?? [];
				categories = jsonData.categories ?? [];
			} catch (err) {
				console.warn(
					`Warning: could not parse Lucide JSON for icon "${iconName}" (${lucideFilePath}): ` +
						`${err instanceof Error ? err.message : String(err)}. Using empty tags/categories.`
				);
				unmatchedIcons.push(iconName);
			}
		} else {
			console.warn(
				`Warning: no matching Lucide JSON found for icon "${iconName}" in ${lucideIconsDir}. ` +
					`Using empty tags/categories.`
			);
			unmatchedIcons.push(iconName);
		}

		return { name: iconName, importVar, fileName: file, tags, categories };
	});

	entries.sort((a, b) => a.name.localeCompare(b.name));

	const importLines = entries
		.map((entry) => `import ${entry.importVar} from '$lib/icons/${entry.fileName}';`)
		.sort((a, b) => {
			const aVar = a.match(/import\s+(\w+)\s+from/)![1];
			const bVar = b.match(/import\s+(\w+)\s+from/)![1];
			return aVar.localeCompare(bVar);
		});

	const listEntries = entries
		.map(
			(entry) => `\t{
\t\tname: '${entry.name}',
\t\ticon: ${entry.importVar},
\t\ttags: ${JSON.stringify(entry.tags)},
\t\tcategories: ${JSON.stringify(entry.categories)}
\t}`
		)
		.join(',\n');

	const fileContent = `${importLines.join('\n')}

const ICONS_LIST = [
${listEntries}
];

export default ICONS_LIST;
`;

	const { added, removed } = diffExistingNames(
		outFile,
		new Set(entries.map((entry) => entry.name))
	);

	writeFileSync(outFile, fileContent, 'utf8');

	return {
		total: entries.length,
		matched: entries.length - unmatchedIcons.length,
		unmatchedIcons,
		added,
		removed
	};
}

function printHelp(): void {
	console.log(
		`Usage: tsx scripts/indexIcons.ts [--pull]

Regenerates src/lib-docs/icons-meta.ts from src/lib/icons/*.svelte and a Lucide checkout.

Environment:
  LUCIDE_ICONS_DIR   Path to a Lucide checkout's "icons" directory (default: ../lucide/icons)

Options:
  --pull   Run "git pull" in the Lucide checkout first (best-effort; warns and continues on failure)
  --help   Show this help message
`
	);
}

function main(): void {
	if (process.argv.includes('--help') || process.argv.includes('-h')) {
		printHelp();
		return;
	}

	const projectRoot = process.cwd();
	const iconsDir = join(projectRoot, 'src/lib/icons');
	const outFile = join(projectRoot, 'src/lib-docs/icons-meta.ts');
	const defaultLucideIconsDir = join(projectRoot, '..', 'lucide', 'icons');
	const lucideIconsDir = process.env.LUCIDE_ICONS_DIR
		? resolve(process.env.LUCIDE_ICONS_DIR)
		: defaultLucideIconsDir;

	if (!existsSync(iconsDir)) {
		console.error(`Error: Icons directory not found at ${iconsDir}`);
		process.exit(1);
	}

	if (!existsSync(lucideIconsDir)) {
		console.error(
			`Error: Lucide icons directory not found at ${lucideIconsDir}.\n` +
				`Set the LUCIDE_ICONS_DIR environment variable to a Lucide checkout's "icons" directory, ` +
				`or clone https://github.com/lucide-icons/lucide into "../lucide" relative to the project ` +
				`root (default path: ${defaultLucideIconsDir}).`
		);
		process.exit(1);
	}

	if (process.argv.includes('--pull')) {
		const lucideRepoRoot = dirname(lucideIconsDir);
		try {
			console.log(`Pulling latest changes in ${lucideRepoRoot}...`);
			execSync('git pull', { cwd: lucideRepoRoot, stdio: 'inherit' });
		} catch (error) {
			console.warn(
				`Warning: could not pull latest changes in ${lucideRepoRoot}, continuing with the ` +
					`checkout as-is: ${error instanceof Error ? error.message : String(error)}`
			);
		}
	}

	const result = generateIconsMeta({ iconsDir, lucideIconsDir, outFile });

	console.log(`\nIndex update complete:`);
	console.log(`Indexed ${result.total} icon(s), ${result.matched} matched with Lucide data.`);
	if (result.added > 0) {
		console.log(`Added ${result.added} icon(s) since the last run.`);
	}
	if (result.removed > 0) {
		console.log(`Removed ${result.removed} icon(s) since the last run.`);
	}
	if (result.unmatchedIcons.length > 0) {
		console.log(`\nUnmatched icon(s) with no Lucide JSON (${result.unmatchedIcons.length}):`);
		result.unmatchedIcons.sort().forEach((icon) => console.log(`  - ${icon}`));
	} else {
		console.log('\nAll Svelte icons were successfully matched with JSON files.');
	}
}

const invokedPath = process.argv[1];
const isMainModule =
	Boolean(invokedPath) && import.meta.url === pathToFileURL(resolve(invokedPath)).href;

if (isMainModule) {
	main();
}

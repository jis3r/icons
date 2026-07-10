import { describe, it, expect, afterEach } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { generateIconsMeta } from './indexIcons.js';

const tempDirs: string[] = [];

function makeFixture(): { iconsDir: string; lucideIconsDir: string; outFile: string } {
	const root = mkdtempSync(join(tmpdir(), 'indexIcons-test-'));
	tempDirs.push(root);

	const iconsDir = join(root, 'icons');
	const lucideIconsDir = join(root, 'lucide');
	mkdirSync(iconsDir);
	mkdirSync(lucideIconsDir);

	writeFileSync(join(iconsDir, 'a.svelte'), '<svg></svg>');
	writeFileSync(join(iconsDir, 'b-icon.svelte'), '<svg></svg>');
	writeFileSync(join(iconsDir, 'no-lucide.svelte'), '<svg></svg>');

	writeFileSync(
		join(lucideIconsDir, 'a.json'),
		JSON.stringify({ tags: ['alpha', "don't panic"], categories: ['test'] })
	);
	writeFileSync(
		join(lucideIconsDir, 'b-icon.json'),
		JSON.stringify({ tags: ['beta'], categories: ['other'] })
	);
	// Deliberately no no-lucide.json.

	return { iconsDir, lucideIconsDir, outFile: join(root, 'icons-meta.ts') };
}

afterEach(() => {
	while (tempDirs.length > 0) {
		const dir = tempDirs.pop();
		if (dir) rmSync(dir, { recursive: true, force: true });
	}
});

describe('generateIconsMeta', () => {
	it('emits one sorted, camelCased import per icon file', () => {
		const fixture = makeFixture();
		generateIconsMeta(fixture);

		const content = readFileSync(fixture.outFile, 'utf8');
		const importLines = content.split('\n').filter((line) => line.startsWith('import'));

		expect(importLines).toEqual([
			"import a from '$lib/icons/a.svelte';",
			"import bIcon from '$lib/icons/b-icon.svelte';",
			"import noLucide from '$lib/icons/no-lucide.svelte';"
		]);
	});

	it('gives icons with no matching Lucide JSON empty tags/categories', () => {
		const fixture = makeFixture();
		const result = generateIconsMeta(fixture);

		expect(result.unmatchedIcons).toEqual(['no-lucide']);
		expect(result.total).toBe(3);
		expect(result.matched).toBe(2);

		const content = readFileSync(fixture.outFile, 'utf8');
		const noLucideEntry = content.match(/\{\s*name: 'no-lucide',[\s\S]*?\}/)?.[0];
		expect(noLucideEntry).toBeDefined();
		expect(noLucideEntry).toContain('tags: []');
		expect(noLucideEntry).toContain('categories: []');
	});

	it('keeps an apostrophe in a tag intact', () => {
		const fixture = makeFixture();
		generateIconsMeta(fixture);

		const content = readFileSync(fixture.outFile, 'utf8');
		expect(content).toContain("don't panic");
	});

	it('is idempotent across repeated runs', () => {
		const fixture = makeFixture();
		generateIconsMeta(fixture);
		const first = readFileSync(fixture.outFile, 'utf8');

		generateIconsMeta(fixture);
		const second = readFileSync(fixture.outFile, 'utf8');

		expect(second).toBe(first);
	});
});

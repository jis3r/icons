#!/usr/bin/env node
/**
 * Script: indexIcons.ts
 *
 * Description:
 *  - Reads every .svelte file in "src/lib/icons".
 *  - For each file, it looks for a corresponding JSON file in "../lucide/icons"
 *    (using the same basename).
 *  - If found, it reads the JSON file, removes the "$schema" and "contributors" keys,
 *    and then creates an icon entry with the name (based on the filename), an icon property
 *    (the imported Svelte component), tags, and categories.
 *  - The icon property is inserted as the second property in the object.
 *  - The script then reads "src/lib-docs/icons-meta.ts" and checks whether the icon already exists.
 *  - If the icon does not exist, it adds the new icon object to the ICONS_LIST array,
 *    maintaining alphabetical order by name.
 *  - The script also removes icons from the index that no longer have corresponding files.
 *  - The script adds/removes import statements at the top of the file for the corresponding Svelte components.
 *  - Unused imports are automatically removed.
 *
 * Import variable names are converted to camelCase.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface LucideIconData {
	tags?: string[];
	categories?: string[];
	$schema?: string;
	contributors?: unknown;
}

interface IconInfo {
	iconName: string;
	importVar: string;
	fileName: string;
	tags: string[];
	categories: string[];
}

interface ParsedIcon {
	name: string;
	icon: string;
	tags: string[];
	categories: string[];
}

function toCamelCase(str: string): string {
	return str
		.split('-')
		.map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
		.join('');
}

function updateIconsIndex(): void {
	const packageRoot = process.cwd();
	const iconsDir = join(packageRoot, 'src/lib/icons');
	const lucideIconsDir = join(packageRoot, '..', 'lucide/icons');
	const indexFilePath = join(packageRoot, 'src/lib-docs/icons-meta.ts');

	if (!existsSync(iconsDir)) {
		console.error(`Error: Icons directory not found at ${iconsDir}`);
		process.exit(1);
	}
	if (!existsSync(lucideIconsDir)) {
		console.error(`Error: Lucide icons directory not found at ${lucideIconsDir}`);
		process.exit(1);
	}
	if (!existsSync(indexFilePath)) {
		console.error(`Error: Index file not found at ${indexFilePath}`);
		process.exit(1);
	}

	try {
		console.log('Pulling latest changes from Lucide repository...');
		const lucideDir = join(packageRoot, '..', 'lucide');
		execSync('git pull', { cwd: lucideDir, stdio: 'inherit' });
		console.log('Successfully pulled latest changes from Lucide repository');
	} catch (error) {
		console.error(
			'Error pulling from Lucide repository:',
			error instanceof Error ? error.message : String(error)
		);
		process.exit(1);
	}

	let indexContent = readFileSync(indexFilePath, 'utf8');

	const files = readdirSync(iconsDir);
	const svelteFiles = files.filter((file) => file.endsWith('.svelte'));

	const existingIconFiles = new Set(svelteFiles.map((file) => basename(file, '.svelte')));

	let iconsAddedCount = 0;
	let iconsRemovedCount = 0;
	const unmatchedIcons: string[] = [];
	const skippedExistingIcons: string[] = [];
	const removedIcons: string[] = [];
	const newIcons: IconInfo[] = [];

	svelteFiles.forEach((file) => {
		const iconName = basename(file, '.svelte');
		const lucideFilePath = join(lucideIconsDir, iconName + '.json');

		if (existsSync(lucideFilePath)) {
			const rawJson = readFileSync(lucideFilePath, 'utf8');
			let jsonData: LucideIconData;
			try {
				jsonData = JSON.parse(rawJson) as LucideIconData;
			} catch (err) {
				console.error(`Error parsing JSON for icon "${iconName}":`, err);
				return;
			}

			delete jsonData['$schema'];
			delete jsonData['contributors'];

			const iconExistsRegex = new RegExp(`name\\s*[:=]\\s*["'\`]${iconName}["'\`]`);
			if (!iconExistsRegex.test(indexContent)) {
				const importVar = toCamelCase(iconName);
				newIcons.push({
					iconName,
					importVar,
					fileName: file,
					tags: jsonData.tags || [],
					categories: jsonData.categories || []
				});
				console.log(`✅ Will add icon "${iconName}"`);
			} else {
				skippedExistingIcons.push(iconName);
				console.log(`⏭️  Skipping "${iconName}" - already exists in index`);
			}
		} else {
			console.log(`❌ No matching JSON file found for icon "${iconName}" in lucide`);
			unmatchedIcons.push(iconName);
		}
	});

	const iconsListMatch = indexContent.match(/(let|const) ICONS_LIST = \[([\s\S]*?)\];/);
	if (!iconsListMatch) {
		console.error('Error: Could not find ICONS_LIST in index file.');
		process.exit(1);
	}

	const declarationType = iconsListMatch[1];
	const iconsListContent = iconsListMatch[2];

	const existingIcons: ParsedIcon[] = [];
	const iconRegex =
		/\{\s*name:\s*['"`]([^'"`]+)['"`],\s*icon:\s*([^,]+),\s*tags:\s*(\[[^\]]*\]),\s*categories:\s*(\[[^\]]*\])\s*\}/g;
	let match: RegExpExecArray | null;

	while ((match = iconRegex.exec(iconsListContent)) !== null) {
		const tagsStr = match[3];
		const categoriesStr = match[4];

		const tagsJson = tagsStr.includes("'") ? tagsStr.replace(/'/g, '"') : tagsStr;
		const categoriesJson = categoriesStr.includes("'")
			? categoriesStr.replace(/'/g, '"')
			: categoriesStr;

		existingIcons.push({
			name: match[1],
			icon: match[2].trim(),
			tags: JSON.parse(tagsJson) as string[],
			categories: JSON.parse(categoriesJson) as string[]
		});
	}

	const filteredIcons = existingIcons.filter((icon) => {
		if (existingIconFiles.has(icon.name)) {
			return true;
		} else {
			removedIcons.push(icon.name);
			console.log(`🗑️  Removing icon "${icon.name}" - file no longer exists`);
			return false;
		}
	});

	iconsRemovedCount = removedIcons.length;

	newIcons.forEach((icon) => {
		filteredIcons.push({
			name: icon.iconName,
			icon: icon.importVar,
			tags: icon.tags,
			categories: icon.categories
		});
	});

	iconsAddedCount = newIcons.length;

	const requiredImportVars = new Set<string>();
	filteredIcons.forEach((icon) => {
		requiredImportVars.add(icon.icon);
	});

	const importLinesToAdd: string[] = [];
	newIcons.forEach((icon) => {
		const importRegex = new RegExp(
			`import\\s+${icon.importVar}\\s+from\\s+['"]\\$lib/icons/${icon.fileName}['"]`
		);
		if (!importRegex.test(indexContent)) {
			importLinesToAdd.push(`import ${icon.importVar} from '$lib/icons/${icon.fileName}';`);
		}
	});

	const lines = indexContent.split('\n');
	let shebangLine: string | null = null;
	const importLines: string[] = [];
	const nonImportLines: string[] = [];

	let i = 0;
	if (lines[0].startsWith('#!')) {
		shebangLine = lines[0];
		i = 1;
	}

	while (i < lines.length && lines[i].trim().startsWith('import')) {
		importLines.push(lines[i]);
		i++;
	}

	while (i < lines.length) {
		nonImportLines.push(lines[i]);
		i++;
	}

	const filteredImportLines = importLines.filter((line) => {
		const importMatch = line.match(/import\s+(\w+)\s+from/);
		if (importMatch) {
			const importVar = importMatch[1];
			if (requiredImportVars.has(importVar)) {
				return true;
			} else {
				console.log(`🗑️  Removing unused import: ${importVar}`);
				return false;
			}
		}
		return true;
	});

	filteredImportLines.push(...importLinesToAdd);

	filteredImportLines.sort((a, b) => {
		const aMatch = a.match(/import\s+(\w+)\s+from/);
		const bMatch = b.match(/import\s+(\w+)\s+from/);
		if (aMatch && bMatch) {
			return aMatch[1].localeCompare(bMatch[1]);
		}
		return a.localeCompare(b);
	});

	const newLines: string[] = [];
	if (shebangLine) {
		newLines.push(shebangLine);
	}
	newLines.push(...filteredImportLines);
	newLines.push(...nonImportLines);

	indexContent = newLines.join('\n');

	filteredIcons.sort((a, b) => a.name.localeCompare(b.name));

	const newIconsListContent = filteredIcons
		.map((icon) => {
			return `	{
		name: '${icon.name}',
		icon: ${icon.icon},
		tags: ${JSON.stringify(icon.tags)},
		categories: ${JSON.stringify(icon.categories)}
	}`;
		})
		.join(',\n');

	const newIconsList = `${declarationType} ICONS_LIST = [
${newIconsListContent}
];`;

	indexContent = indexContent.replace(/(let|const) ICONS_LIST = \[[\s\S]*?\];/, newIconsList);

	if (iconsAddedCount > 0) {
		console.log(`✅ Added ${iconsAddedCount} new icon(s) in alphabetical order`);
	}
	if (iconsRemovedCount > 0) {
		console.log(`🗑️  Removed ${iconsRemovedCount} icon(s) that no longer have files`);
	}
	if (iconsAddedCount === 0 && iconsRemovedCount === 0) {
		console.log('No changes to icons list.');
	}

	writeFileSync(indexFilePath, indexContent, 'utf8');

	console.log(`\nIndex update complete:`);
	console.log(`✅ Added ${iconsAddedCount} new icon(s)`);
	if (iconsRemovedCount > 0) {
		console.log(`🗑️  Removed ${iconsRemovedCount} icon(s)`);
	}
	console.log(`⏭️  Skipped ${skippedExistingIcons.length} existing icon(s)`);

	if (iconsAddedCount > 0) {
		console.log('\nNewly added icons:');
		newIcons
			.sort((a, b) => a.iconName.localeCompare(b.iconName))
			.forEach((icon) => {
				console.log(`  - ${icon.iconName}`);
			});
	}

	if (iconsRemovedCount > 0) {
		console.log('\nRemoved icons:');
		removedIcons.sort().forEach((icon) => {
			console.log(`  - ${icon}`);
		});
	}

	if (unmatchedIcons.length > 0) {
		console.log(`\n❌ Found ${unmatchedIcons.length} unmatched Svelte icon(s):`);
		unmatchedIcons.sort().forEach((icon) => {
			console.log(`  - ${icon}`);
		});
	} else {
		console.log('\n✅ All Svelte icons were successfully matched with JSON files.');
	}
}

updateIconsIndex();

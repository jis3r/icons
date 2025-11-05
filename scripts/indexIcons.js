#!/usr/bin/env node
/**
 * Script: updateIconsIndex.js
 *
 * Description:
 *  - Reads every .svelte file in "src/lib/icons".
 *  - For each file, it looks for a corresponding JSON file in "../lucide/icons"
 *    (using the same basename).
 *  - If found, it reads the JSON file, removes the "$schema" and "contributors" keys,
 *    and then creates an icon entry with the name (based on the filename), an icon property
 *    (the imported Svelte component), tags, and categories.
 *  - The icon property is inserted as the second property in the object.
 *  - The script then reads "src/lib/icons/index.js" and checks whether the icon already exists.
 *  - If the icon does not exist, it adds the new icon object to the ICONS_LIST array,
 *    maintaining alphabetical order by name.
 *  - The script also adds an import statement at the top of the file for the corresponding Svelte component.
 *
 * Import variable names are converted to camelCase.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper function to convert kebab-case to camelCase
function toCamelCase(str) {
	return str
		.split('-')
		.map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
		.join('');
}

function updateIconsIndex() {
	// Get the root of the current package.
	const packageRoot = process.cwd();
	// Directory containing your .svelte icon files
	const iconsDir = join(packageRoot, 'src/lib/icons');
	// Directory containing lucide JSON files (assumes lucide folder is sibling to your package folder)
	const lucideIconsDir = join(packageRoot, '..', 'lucide/icons');
	// File to update
	const indexFilePath = join(iconsDir, 'index.js');

	// Check that required folders and file exist
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

	// Execute git pull in the lucide directory
	try {
		console.log('Pulling latest changes from Lucide repository...');
		const lucideDir = join(packageRoot, '..', 'lucide');
		execSync('git pull', { cwd: lucideDir, stdio: 'inherit' });
		console.log('Successfully pulled latest changes from Lucide repository');
	} catch (error) {
		console.error('Error pulling from Lucide repository:', error.message);
		process.exit(1);
	}

	// Read the content of index.js where ICONS_LIST is defined.
	let indexContent = readFileSync(indexFilePath, 'utf8');

	// Get all .svelte files from the icons directory.
	const files = readdirSync(iconsDir);
	const svelteFiles = files.filter((file) => file.endsWith('.svelte'));

	let iconsAddedCount = 0;
	let unmatchedIcons = [];
	let skippedExistingIcons = [];
	// We'll accumulate info for icons that should be added.
	let newIcons = [];

	svelteFiles.forEach((file) => {
		// Use the basename (without .svelte) as the icon name.
		const iconName = basename(file, '.svelte');
		// Look for the corresponding JSON file in the lucide package.
		const lucideFilePath = join(lucideIconsDir, iconName + '.json');

		if (existsSync(lucideFilePath)) {
			// Read and parse the JSON file.
			const rawJson = readFileSync(lucideFilePath, 'utf8');
			let jsonData;
			try {
				jsonData = JSON.parse(rawJson);
			} catch (err) {
				console.error(`Error parsing JSON for icon "${iconName}":`, err);
				return; // Skip this icon if the JSON is malformed.
			}

			// Remove the properties "$schema" and "contributors".
			delete jsonData['$schema'];
			delete jsonData['contributors'];

			// Check if the icon already exists in the index.js file by looking for its name property.
			const iconExistsRegex = new RegExp(`name\\s*[:=]\\s*["'\`]${iconName}["'\`]`);
			if (!iconExistsRegex.test(indexContent)) {
				// Prepare icon information for later insertion.
				const importVar = toCamelCase(iconName);
				newIcons.push({
					iconName,
					importVar,
					fileName: file, // file is the same as `${iconName}.svelte`
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

	// First, add import statements for each new icon if they don't already exist.
	const importLinesToAdd = [];
	newIcons.forEach((icon) => {
		// Check if an import line exists for this icon.
		const importRegex = new RegExp(
			`import\\s+${icon.importVar}\\s+from\\s+['"]\\./${icon.fileName}['"]`
		);
		if (!importRegex.test(indexContent)) {
			importLinesToAdd.push(`import ${icon.importVar} from './${icon.fileName}';`);
		}
	});

	// Always sort imports alphabetically, even if no new imports are added
	if (importLinesToAdd.length > 0 || true) {
		// Split the file into lines.
		const lines = indexContent.split('\n');
		let shebangLine = null;
		let importLines = [];
		let nonImportLines = [];

		// Separate shebang, imports, and non-imports
		let i = 0;
		if (lines[0].startsWith('#!')) {
			shebangLine = lines[0];
			i = 1;
		}

		// Collect all existing import lines
		while (i < lines.length && lines[i].trim().startsWith('import')) {
			importLines.push(lines[i]);
			i++;
		}

		// Collect remaining non-import lines
		while (i < lines.length) {
			nonImportLines.push(lines[i]);
			i++;
		}

		// Add new import lines to the existing ones
		importLines.push(...importLinesToAdd);

		// Sort all import lines alphabetically by the import name
		importLines.sort((a, b) => {
			const aMatch = a.match(/import\s+(\w+)\s+from/);
			const bMatch = b.match(/import\s+(\w+)\s+from/);
			if (aMatch && bMatch) {
				return aMatch[1].localeCompare(bMatch[1]);
			}
			return a.localeCompare(b);
		});

		// Reconstruct the file
		const newLines = [];
		if (shebangLine) {
			newLines.push(shebangLine);
		}
		newLines.push(...importLines);
		newLines.push(...nonImportLines);

		indexContent = newLines.join('\n');
	}

	// If new icons were found, update the ICONS_LIST
	if (newIcons.length > 0) {
		// Parse the existing ICONS_LIST to extract all icons
		const iconsListMatch = indexContent.match(/let ICONS_LIST = \[([\s\S]*?)\];/);
		if (!iconsListMatch) {
			console.error('Error: Could not find ICONS_LIST in index file.');
			process.exit(1);
		}

		const iconsListContent = iconsListMatch[1];

		// Parse existing icons from the ICONS_LIST
		const existingIcons = [];
		const iconRegex =
			/\{\s*name:\s*['"`]([^'"`]+)['"`],\s*icon:\s*([^,]+),\s*tags:\s*(\[[^\]]*\]),\s*categories:\s*(\[[^\]]*\])\s*\}/g;
		let match;

		while ((match = iconRegex.exec(iconsListContent)) !== null) {
			// Convert JavaScript array syntax to JSON format for parsing if needed
			const tagsStr = match[3];
			const categoriesStr = match[4];

			const tagsJson = tagsStr.includes("'") ? tagsStr.replace(/'/g, '"') : tagsStr;
			const categoriesJson = categoriesStr.includes("'")
				? categoriesStr.replace(/'/g, '"')
				: categoriesStr;

			existingIcons.push({
				name: match[1],
				icon: match[2].trim(),
				tags: JSON.parse(tagsJson),
				categories: JSON.parse(categoriesJson)
			});
		}

		// Add new icons to the existing icons array
		newIcons.forEach((icon) => {
			existingIcons.push({
				name: icon.iconName,
				icon: icon.importVar,
				tags: icon.tags,
				categories: icon.categories
			});
		});

		// Sort all icons alphabetically by name
		existingIcons.sort((a, b) => a.name.localeCompare(b.name));

		// Reconstruct the ICONS_LIST content
		const newIconsListContent = existingIcons
			.map((icon) => {
				return `	{
		name: '${icon.name}',
		icon: ${icon.icon},
		tags: ${JSON.stringify(icon.tags)},
		categories: ${JSON.stringify(icon.categories)}
	}`;
			})
			.join(',\n');

		// Replace the ICONS_LIST content in the file
		const newIconsList = `let ICONS_LIST = [
${newIconsListContent}
];`;

		indexContent = indexContent.replace(/let ICONS_LIST = \[[\s\S]*?\];/, newIconsList);

		iconsAddedCount = newIcons.length;
		console.log(`✅ Added ${iconsAddedCount} new icon(s) in alphabetical order`);
	} else {
		console.log('No new icons to add.');
	}

	// Write the updated content back to the index.js file.
	writeFileSync(indexFilePath, indexContent, 'utf8');

	console.log(`\nIndex update complete:`);
	console.log(`✅ Added ${iconsAddedCount} new icon(s)`);
	console.log(`⏭️  Skipped ${skippedExistingIcons.length} existing icon(s)`);

	if (iconsAddedCount > 0) {
		console.log('\nNewly added icons:');
		newIcons
			.sort((a, b) => a.iconName.localeCompare(b.iconName))
			.forEach((icon) => {
				console.log(`  - ${icon.iconName}`);
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

// Run the update function.
updateIconsIndex();

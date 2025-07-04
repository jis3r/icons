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
 *  - If the icon does not exist, it appends the new icon object to the ICONS_LIST array,
 *    and also adds an import statement at the top of the file for the corresponding Svelte component.
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

	// If new icons were found, update the indexContent.
	if (newIcons.length > 0) {
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

		if (importLinesToAdd.length > 0) {
			// Split the file into lines.
			const lines = indexContent.split('\n');
			let insertIndex = 0;
			// If the file starts with a shebang, skip the first line.
			if (lines[0].startsWith('#!')) {
				insertIndex = 1;
			}
			// Advance past any existing import lines.
			while (insertIndex < lines.length && lines[insertIndex].trim().startsWith('import')) {
				insertIndex++;
			}
			// Insert new import lines at the determined index.
			lines.splice(insertIndex, 0, ...importLinesToAdd);
			indexContent = lines.join('\n');
		}

		// Now, append new icon entries to the ICONS_LIST array.
		const lastBracketIndex = indexContent.lastIndexOf(']');
		if (lastBracketIndex === -1) {
			console.error('Error: Could not find closing bracket in index file.');
			process.exit(1);
		}
		let beforePart = indexContent.substring(0, lastBracketIndex).trimRight();
		const afterPart = indexContent.substring(lastBracketIndex);

		// Ensure proper comma if the array isn't empty.
		if (!beforePart.endsWith('[')) {
			beforePart += ',\n';
		} else {
			beforePart += '\n';
		}

		// Create new entries with properties in the desired order: name, icon, tags, categories.
		const newEntriesStrs = newIcons
			.map((icon) => {
				return `{
  name: "${icon.iconName}",
  icon: ${icon.importVar},
  tags: ${JSON.stringify(icon.tags)},
  categories: ${JSON.stringify(icon.categories)}
}`;
			})
			.join(',\n');

		indexContent = beforePart + newEntriesStrs + '\n' + afterPart;
		iconsAddedCount = newIcons.length;
		console.log(`✅ Added ${iconsAddedCount} new icon(s)`);
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

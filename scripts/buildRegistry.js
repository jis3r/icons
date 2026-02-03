import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');

const REGISTRY_PATH = join(ROOT_DIR, 'registry.json');
const OUTPUT_DIR = join(ROOT_DIR, 'static', 'r');
const ICONS_DIR = join(ROOT_DIR, 'src', 'lib', 'icons');

const ICON_PROPS_IMPORT = /import type \{ IconProps \} from '\.\/types\.js';\n\n?/;
const INLINED_ICON_PROPS = `interface IconProps {
		color?: string;
		size?: number;
		strokeWidth?: number;
		animate?: boolean;
		class?: string;
	}

	`;

async function ensureDir(dir) {
	try {
		await fs.mkdir(dir, { recursive: true });
	} catch (error) {
		if (error.code !== 'EEXIST') {
			throw error;
		}
	}
}

async function buildRegistry() {
	console.log('Reading registry.json...');
	const registryContent = await fs.readFile(REGISTRY_PATH, 'utf8');
	const registry = JSON.parse(registryContent);

	await ensureDir(OUTPUT_DIR);

	const { items } = registry;
	const total = items.length;
	console.log(`Processing ${total} icons...`);

	const indexItems = [];
	let processed = 0;
	let errors = 0;

	for (const item of items) {
		try {
			const { name, files } = item;
			if (!files || files.length === 0) {
				console.warn(`⚠️  Skipping ${name}: no files`);
				continue;
			}

			const fileItem = files[0];
			const filePath = fileItem.path;

			let fullPath;
			if (filePath.startsWith('./')) {
				fullPath = join(ROOT_DIR, filePath.slice(2));
			} else {
				fullPath = join(ROOT_DIR, filePath);
			}

			let content = await fs.readFile(fullPath, 'utf8');
			content = content.replace(ICON_PROPS_IMPORT, INLINED_ICON_PROPS);

			const { path, ...fileItemWithoutPath } = fileItem;
			const outputItem = {
				...item,
				files: [
					{
						...fileItemWithoutPath,
						content
					}
				]
			};

			const outputPath = join(OUTPUT_DIR, `${name}.json`);
			await fs.writeFile(outputPath, JSON.stringify(outputItem, null, '\t'));

			indexItems.push({
				name: item.name,
				title: item.title,
				type: item.type,
				author: item.author,
				description: item.description,
				registryDependencies: item.registryDependencies || [],
				relativeUrl: `${name}.json`
			});

			processed++;
			if (processed % 50 === 0) {
				console.log(
					`  Progress: ${processed}/${total} (${Math.round((processed / total) * 100)}%)`
				);
			}
		} catch (error) {
			errors++;
			console.error(`❌ Error processing ${item.name}:`, error.message);
		}
	}

	const indexPath = join(OUTPUT_DIR, 'index.json');
	await fs.writeFile(indexPath, JSON.stringify(indexItems, null, '\t'));

	console.log(`\n✅ Registry build complete!`);
	console.log(`   Processed: ${processed}/${total}`);
	if (errors > 0) {
		console.log(`   Errors: ${errors}`);
	}
	console.log(`   Index written to: static/r/index.json`);
}

buildRegistry().catch((error) => {
	console.error('Fatal error:', error);
	process.exit(1);
});

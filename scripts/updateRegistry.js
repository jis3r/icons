import { promises as fs } from 'fs';

const ICONS_DIR = 'src/lib/icons';
const REGISTRY_PATH = 'registry.json';

const REGISTRY_SCHEMA = 'https://shadcn-svelte.com/schema/registry.json';
const REGISTRY_ITEM_SCHEMA = 'https://shadcn-svelte.com/schema/registry-item.json';
const REGISTRY_NAME = '@jis3r/icons';
const REGISTRY_HOMEPAGE = 'https://movingicons.dev';

async function main() {
	const files = await fs.readdir(ICONS_DIR);
	const iconFiles = files.filter((f) => f.endsWith('.svelte'));

	const items = iconFiles.map((filename) => {
		const name = filename.replace(/\.svelte$/, '');
		return {
			$schema: REGISTRY_ITEM_SCHEMA,
			name,
			title: name,
			type: 'registry:component',
			description: `The animated ${name} icon component.`,
			author: 'jis3r <jis3r@protonmail.com>',
			files: [
				{
					path: `./${ICONS_DIR}/${filename}`,
					type: 'registry:component',
					target: `~/src/lib/components/movingicons/${filename}`
				}
			],
			registryDependencies: []
		};
	});

	const registry = {
		$schema: REGISTRY_SCHEMA,
		name: REGISTRY_NAME,
		homepage: REGISTRY_HOMEPAGE,
		items
	};

	await fs.writeFile(REGISTRY_PATH, JSON.stringify(registry, null, 2));
	console.log(`registry.json updated with ${items.length} icons.`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});

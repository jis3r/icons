import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '../src/lib/icons');
const indexFile = path.join(__dirname, '../src/lib/index.ts');

function toPascalCase(filename: string): string {
	const parts = filename.split('-');
	let result = '';
	let digitBuffer = '';
	for (const part of parts) {
		if (/^\d+$/.test(part)) {
			digitBuffer += part;
		} else {
			if (digitBuffer) {
				result += digitBuffer;
				digitBuffer = '';
			}
			result += part.charAt(0).toUpperCase() + part.slice(1);
		}
	}
	if (digitBuffer) {
		result += digitBuffer;
	}
	return result;
}

const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith('.svelte'));

const componentExports = files.map((file) => {
	const base = file.replace(/\.svelte$/, '');
	const exportName = toPascalCase(base);
	return `export { default as ${exportName} } from "./icons/${file}";`;
});

const iconNames = files.map((f) => f.replace(/\.svelte$/, ''));
const iconNameUnion = iconNames.map((name) => `'${name}'`).join(' | ');

const typeExports = [
	'',
	"export type { IconProps } from './icons/types.js';",
	`export type IconName = ${iconNameUnion};`
];

fs.writeFileSync(indexFile, componentExports.join('\n') + typeExports.join('\n') + '\n');

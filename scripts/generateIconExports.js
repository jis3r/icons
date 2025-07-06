import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '../src/lib/icons');
const indexFile = path.join(__dirname, '../src/lib/index.js');

function toPascalCase(filename) {
	// Split by dash
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

const lines = files.map((file) => {
	const base = file.replace(/\.svelte$/, '');
	const exportName = toPascalCase(base);
	return `export { default as ${exportName} } from "./icons/${file}";`;
});

fs.writeFileSync(indexFile, lines.join('\n') + '\n');

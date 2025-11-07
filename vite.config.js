import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import rawPlugin from 'vite-plugin-raw';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		rawPlugin({
			match: /\/components\/icons\/.*\.svelte$/
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

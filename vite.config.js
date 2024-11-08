import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import rawPlugin from 'vite-plugin-raw';

export default defineConfig({
	plugins: [
		sveltekit(),
		rawPlugin({
			match: /\/components\/icons\/.*\.svelte$/
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

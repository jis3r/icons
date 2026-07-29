import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],

	resolve: process.env.VITEST ? { conditions: ['browser'] } : undefined,

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}', 'scripts/**/*.spec.ts'],
		environment: 'jsdom'
	}
});

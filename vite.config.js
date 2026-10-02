import adapter from '@sveltejs/adapter-auto';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter(),
			csp: {
				mode: 'auto',
				directives: {
					'default-src': ['self'],
					'script-src': ['self'],
					'style-src': ['self', 'unsafe-inline'],
					'img-src': ['self', 'data:'],
					'connect-src': [
						'self',
						'https://eu.i.posthog.com',
						'https://eu-assets.i.posthog.com',
						'https://api.github.com'
					],
					'font-src': ['self'],
					'object-src': ['none'],
					'base-uri': ['self']
				}
			}
		})
	],
	resolve: process.env.VITEST ? { conditions: ['browser'] } : undefined,

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}', 'scripts/**/*.spec.ts'],
		environment: 'jsdom'
	}
});

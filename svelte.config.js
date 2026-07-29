import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$lib-docs': 'src/lib-docs',
			'$lib-docs/*': 'src/lib-docs/*'
		},
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
	}
};

export default config;

import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$lib-docs': 'src/lib-docs',
			'$lib-docs/*': 'src/lib-docs/*'
		}
	}
};

export default config;

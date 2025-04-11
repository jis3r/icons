// Cache for storing pre-loaded icon sources
let iconSourceCache = {};

export let preloadIconSources = async () => {
	try {
		// Create a map of all icon files at build time
		const iconModules = import.meta.glob('/src/lib/icons/*.svelte', {
			query: '?raw',
			import: 'default',
			eager: false
		});

		// Start loading all icons in parallel
		const iconPaths = Object.keys(iconModules);
		const loadPromises = iconPaths.map(async (path) => {
			const iconName = path.split('/').pop().replace('.svelte', '');
			iconSourceCache[iconName] = await iconModules[path]();
		});

		// Wait for all to complete
		await Promise.all(loadPromises);
		return true;
	} catch (error) {
		console.error('Failed to preload icon sources:', error);
		return false;
	}
};

export let getIconSourceSync = (iconName) => {
	if (iconSourceCache[iconName]) {
		return iconSourceCache[iconName];
	}
	throw new Error(`Icon ${iconName} not found in cache`);
};

export let getIconSource = async (iconName) => {
	try {
		// Create a map of all icon files at build time
		const iconModules = import.meta.glob('/src/lib/icons/*.svelte', {
			query: '?raw',
			import: 'default',
			eager: false
		});

		// Find the matching icon module
		const iconPath = `/src/lib/icons/${iconName}.svelte`;
		if (!(iconPath in iconModules)) {
			throw new Error(`Icon ${iconName} not found`);
		}

		// Import the source code
		return await iconModules[iconPath]();
	} catch (error) {
		throw new Error(`Icon ${iconName} not found: ${error.message}`);
	}
};

export let downloadIcon = async (iconName) => {
	try {
		// Try to get from cache first for immediate response
		let source;
		if (iconSourceCache[iconName]) {
			source = iconSourceCache[iconName];
		} else {
			source = await getIconSource(iconName);
		}

		const blob = new Blob([source], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${iconName}.svelte`;
		link.click();
		URL.revokeObjectURL(url);
	} catch (error) {
		console.error(`Failed to download icon ${iconName}:`, error);
		throw error;
	}
};

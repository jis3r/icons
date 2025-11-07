import iflog from 'iflog';

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

export let preloadIconSources = async (icons) => {
	try {
		// Create a map of all icon files at build time
		const iconModules = import.meta.glob('/src/lib/icons/*.svelte', {
			query: '?raw',
			import: 'default',
			eager: false
		});

		// Start loading all icons in parallel
		const loadPromises = icons.map(async (icon) => {
			const iconPath = `/src/lib/icons/${icon.name}.svelte`;
			if (iconPath in iconModules) {
				// Directly store the source in the icon object
				icon.source = await iconModules[iconPath]();
			}
			return icon;
		});

		// Wait for all to complete and return the updated icons array
		return await Promise.all(loadPromises);
	} catch (error) {
		iflog.error('Failed to preload icon sources:', error);
		throw error;
	}
};

export let downloadIcon = async (icon) => {
	try {
		if (!icon.source) {
			// Fetch the source if not already loaded
			icon.source = await getIconSource(icon.name);
		}

		const blob = new Blob([icon.source], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${icon.name}.svelte`;
		link.click();
		URL.revokeObjectURL(url);
	} catch (error) {
		iflog.error(`Failed to download icon ${icon.name}:`, error);
		throw error;
	}
};

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
		const source = await getIconSource(iconName);
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

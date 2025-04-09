export let getIconSource = async (iconName) => {
	try {
		const iconPath = `../icons/${iconName}.svelte`;
		const source = await import(/* @vite-ignore */ `${iconPath}?raw`);
		return source.default;
	} catch (error) {
		throw new Error(`Icon ${iconName} not found`);
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

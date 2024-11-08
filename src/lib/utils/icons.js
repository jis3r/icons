export let getIcons = async () => {
	let icons = import.meta.glob('../icons/*.svelte');

	let rawIcons = import.meta.glob('../icons/*.svelte', {
		query: '?raw',
		import: 'default'
	});

	const iconArray = await Promise.all(
		Object.keys(icons).map(async (key) => {
			const module = await icons[key]();
			const source = await rawIcons[key]();
			return {
				name: key.split('/').pop().split('.').shift(),
				component: module.default,
				source: source
			};
		})
	);

	return iconArray;
};

export let downloadIcon = (icon) => {
	const blob = new Blob([icon.source], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = `${icon.name}.svelte`;
	link.click();
	URL.revokeObjectURL(url);
};

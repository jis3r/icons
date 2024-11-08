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

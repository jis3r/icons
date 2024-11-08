export let getIcons = async () => {
	let icons = import.meta.glob('../icons/*');

	console.log(icons);

	// Map over the keys and dynamically import each icon component
	const iconArray = await Promise.all(
		Object.keys(icons).map(async (key) => {
			const module = await icons[key]();
			return {
				name: key.split('/').pop().split('.').shift(),
				component: module.default,
				source: module.source // Ensure 'source' is correctly accessible in each component
			};
		})
	);

	return iconArray;
};

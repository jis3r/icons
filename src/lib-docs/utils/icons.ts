import iflog from 'iflog';
import type ICONS_LIST_TYPE from '$lib-docs/icons-meta';

type Icon = (typeof ICONS_LIST_TYPE)[number];
type IconWithSource = Icon & { source?: string };

export const getIconSource = async (iconName: string): Promise<string> => {
	try {
		const iconModules = import.meta.glob('/src/lib/icons/*.svelte', {
			query: '?raw',
			import: 'default',
			eager: false
		});

		const iconPath = `/src/lib/icons/${iconName}.svelte`;
		if (!(iconPath in iconModules)) {
			throw new Error(`Icon ${iconName} not found`);
		}

		return (await iconModules[iconPath]()) as string;
	} catch (error) {
		throw new Error(
			`Icon ${iconName} not found: ${error instanceof Error ? error.message : String(error)}`
		);
	}
};

export const preloadIconSources = async (icons: Icon[]): Promise<IconWithSource[]> => {
	try {
		const iconModules = import.meta.glob('/src/lib/icons/*.svelte', {
			query: '?raw',
			import: 'default',
			eager: false
		});

		const loadPromises = icons.map(async (icon): Promise<IconWithSource> => {
			const iconPath = `/src/lib/icons/${icon.name}.svelte`;
			if (iconPath in iconModules) {
				const source = (await iconModules[iconPath]()) as string;
				return { ...icon, source };
			}
			return icon;
		});

		return await Promise.all(loadPromises);
	} catch (error) {
		iflog.error('Failed to preload icon sources:', error);
		throw error;
	}
};

export const downloadIcon = async (icon: IconWithSource): Promise<void> => {
	try {
		if (!icon.source) {
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

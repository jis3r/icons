import iflog from 'iflog';
import type ICONS_LIST_TYPE from '$lib-docs/icons-meta.ts';

type Icon = (typeof ICONS_LIST_TYPE)[number];
type IconWithSource = Icon & { source?: string };

const ICON_PROPS_IMPORT = /import type \{ IconProps \} from '\.\/types\.js';\n\n?/;
const INLINED_ICON_PROPS = `interface IconProps {
		color?: string;
		size?: number;
		strokeWidth?: number;
		animate?: boolean;
		class?: string;
	}

	`;

function toStandaloneSource(raw: string): string {
	return raw.replace(ICON_PROPS_IMPORT, INLINED_ICON_PROPS);
}

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

		const raw = (await iconModules[iconPath]()) as string;
		return toStandaloneSource(raw);
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
				const raw = (await iconModules[iconPath]()) as string;
				return { ...icon, source: toStandaloneSource(raw) };
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

/**
 * Shared replacement for icon source when inlining IconProps (e.g. standalone snippets, registry).
 * Keep in sync with src/lib/icons/types.ts when IconProps changes.
 */
export const ICON_PROPS_IMPORT = /import type \{ IconProps \} from '\.\/types\.js';\n\n?/;
export const INLINED_ICON_PROPS = `interface IconProps {
		color?: string;
		size?: number;
		strokeWidth?: number;
		animate?: boolean;
		class?: string;
	}

`;

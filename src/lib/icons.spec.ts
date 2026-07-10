import { describe, it, expect } from 'vitest';
import { mount, unmount, flushSync, type Component } from 'svelte';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import * as icons from './index.js';
import type { IconProps } from './icons/types.js';

// ESM: __dirname does not exist; import.meta.dirname requires Node >= 20.11 (present here).
const iconFiles = readdirSync(join(import.meta.dirname, 'icons'))
	.filter((f) => f.endsWith('.svelte'))
	.map((f) => f.replace(/\.svelte$/, ''));

const components = Object.entries(icons).filter(([, v]) => typeof v === 'function');

describe('icon barrel', () => {
	it('exports exactly one component per icon file', () => {
		expect(components.length).toBe(iconFiles.length);
	});
});

describe.each(components)('%s', (name, IconComponent) => {
	it('mounts with a role=img wrapper, aria-label, and an svg honoring props', () => {
		const target = document.createElement('div');
		const instance = mount(IconComponent as Component<IconProps>, {
			target,
			props: { size: 32, color: 'rebeccapurple', strokeWidth: 1.5, class: 'probe' }
		});
		flushSync();

		const wrapper = target.querySelector('div[role="img"]');
		expect(wrapper, 'wrapper div[role=img]').toBeTruthy();
		expect(wrapper!.getAttribute('aria-label')).toBeTruthy();
		expect(wrapper!.classList.contains('probe')).toBe(true);

		const svg = wrapper!.querySelector('svg');
		expect(svg, 'svg element').toBeTruthy();
		expect(svg!.getAttribute('width')).toBe('32');
		expect(svg!.getAttribute('height')).toBe('32');
		expect(svg!.getAttribute('stroke')).toBe('rebeccapurple');
		expect(svg!.getAttribute('stroke-width')).toBe('1.5');
		expect(svg!.getAttribute('viewBox')).toBe('0 0 24 24');

		unmount(instance);
	});
});

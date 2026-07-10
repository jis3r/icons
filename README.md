<a href="https://vercel.com/oss"><img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge-2026.svg" /></a>

# `moving icons` - the standard for animated icons in Svelte. 🧡

A collection of 500+ hand-crafted, interaction-ready [Lucide](https://lucide.dev) icons. Built natively for Svelte 5 with zero dependencies. Fully tree-shakeable, MIT licensed, and completely customizable.

**Demo** → [https://movingicons.dev](https://movingicons.dev)

<a href="https://madewithsvelte.com/p/moving-icons/shield-link"><img src="https://madewithsvelte.com/storage/repo-shields/5371-shield.svg" alt="Made with Svelte" /></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License"/></a>
<a href="https://www.npmjs.com/package/@jis3r/icons" title="View this project on NPM"><img src="https://img.shields.io/npm/v/%40jis3r%2Ficons" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/@jis3r/icons" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/%40jis3r%2Ficons" alt="NPM downloads" /></a>

## Installation

There are three ways to install icons into your project:

### Install via npm

```bash
npm i @jis3r/icons
```

### Add via shadcn-svelte registry

You can add icons to your project using the shadcn registry. Ensure shadcn-svelte is installed. To add an icon, simply copy the command from the website and run it in your terminal. Icons will be added to your project in the `src/lib/components/movingicons` directory.

```bash
npx shadcn-svelte@latest add https://movingicons.dev/r/[icon-name]
```

### Copy from website

You can download or copy icon components directly from the [icons page](https://movingicons.dev/icons) and paste them into your Svelte project.

## Usage

Import icons as named Svelte components:

```svelte
<script>
	import { Activity, Star } from '@jis3r/icons';
</script>

<Activity size={32} color="orange" strokeWidth={2.5} />
<Star size={32} color="blue" />
```

- All icons are available as named exports in PascalCase and are identical to the respective Lucide icon names.
- Compatible with SvelteKit and Svelte projects.

### Import a single icon

If you don't want to pull in the barrel file, import an icon directly from its subpath:

```svelte
<script>
	import Bell from '@jis3r/icons/icons/bell'; // single-icon import, no barrel
</script>

<Bell size={16} />
```

## Props

| Prop          | Type    | Default        | Description                                                                                        |
| ------------- | ------- | -------------- | -------------------------------------------------------------------------------------------------- |
| `size`        | number  | 24             | Icon size in pixels                                                                                |
| `color`       | string  | 'currentColor' | Stroke color (CSS color value)                                                                     |
| `strokeWidth` | number  | 2              | SVG stroke width                                                                                   |
| `class`       | string  | —              | Optional additional CSS classes                                                                    |
| `animate`     | boolean | false          | Externally triggers the animation (icons also animate on their own hover; the two combine with OR) |

### Animation behavior

Every icon self-animates when a pointer hovers over it, with no setup required: a one-shot animation plays automatically (duration varies per icon, roughly 200-1500ms), and a few icons instead animate continuously for as long as they're hovered ("hover-hold"). The `animate` prop is a separate, external trigger: setting it to `true` plays the animation regardless of hover, and it is OR-ed with the internal hover state, so a parent can trigger the same animation programmatically (see [Advanced Usage](#advanced-usage) below). There is currently no prop to disable the built-in hover trigger.

## Advanced Usage

Control icon animations from parent elements by binding the `animate` prop to your own hover state:

```svelte
<script>
	import { Bell } from '@jis3r/icons';

	let animate = $state(false);
</script>

<button
	onmouseenter={() => (animate = true)}
	onmouseleave={() => (animate = false)}
	class="flex items-center gap-2"
>
	<Bell size={16} {animate} />
	<span>Notifications</span>
</button>
```

When building navigation or sidebar components, it might come in handy to create a reusable wrapper component. With snippets, you can pass the hover state to the children, allowing icons to animate on hover:

```svelte
<!-- HoverableItem.svelte -->
<script>
	let { children, class: className = '' } = $props();
	let isHovered = $state(false);
</script>

<div
	class={className}
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
>
	{@render children(isHovered)}
</div>
```

Use the wrapper component in your navigation:

```svelte
<script>
	import HoverableItem from './HoverableItem.svelte';
	import { Home, Settings } from '@jis3r/icons';
</script>

<nav class="flex flex-col gap-2">
	<HoverableItem class="flex items-center gap-2 rounded p-2">
		{#snippet children(isHovered)}
			<Home size={16} animate={isHovered} />
			<span>Home</span>
		{/snippet}
	</HoverableItem>
	<HoverableItem class="flex items-center gap-2 rounded p-2">
		{#snippet children(isHovered)}
			<Settings size={16} animate={isHovered} />
			<span>Settings</span>
		{/snippet}
	</HoverableItem>
</nav>
```

## Accessibility

- Every icon renders a `<div role="img" aria-label="<lucide-name>">` wrapper around its SVG, where `<lucide-name>` is the icon's Lucide name (for example, `aria-label="bell"`).
- If you're using an icon decoratively - for example, next to a text label that already conveys the meaning - wrap it with `aria-hidden="true"` yourself; the icon's own `aria-label` is always present and can't be removed via props.
- **Known limitation:** animations do not currently respect `prefers-reduced-motion`. If your users need reduced motion, gate the hover interaction or rendering yourself, for example by checking `window.matchMedia('(prefers-reduced-motion: reduce)')` before enabling animate-related interactions.

## Contributing

We welcome contributions to `jis3r/icons`! Please read the [contribution guidelines](https://github.com/jis3r/icons/blob/master/CONTRIBUTING.md) carefully before submitting improvements and new icons:

## Terms of Use

Feel free to use these components in personal and commercial projects. However, while the tutorials and demos are available for your use as-is, they cannot be redistributed or resold. Let's keep things fair and respect each other's work.

If you have any questions or just want to say hi, feel free to reach out to me 👉 [@jis3r](https://twitter.com/jis3r).

## Notes

This project is a work in progress, and i'm continuously working to improve and expand this collection. I'd love to hear your feedback or see your contributions as the project evolves!

## Credits

Thank you to the awesome [Dmytro](https://twitter.com/pqoqubbw) 💜 for the idea and inspiration to animated lucide-icons! I loved his project so much that I wanted to make it available for the Svelte ecosystem, so here we go! :)

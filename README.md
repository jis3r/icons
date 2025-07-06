# `jis3r/icons` is beautifully crafted, moving icons. for svelte. 🧡

**Demo** → [https://movingicons.dev](https://movingicons.dev)

<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"/></a>
<a href="https://madewithsvelte.com/p/moving-icons/shield-link"><img src="https://madewithsvelte.com/storage/repo-shields/5371-shield.svg"/></a>

## Installation

```bash
npm install @jis3r/icons
```

## Usage

Import icons as named Svelte components:

```svelte
<script>
	import { Activity, Star } from '@jis3r/icons';
</script>

<Activity size={32} color="orange" strokeWidth={2.5} />
<Star size={32} color="blue" />
```

- All icons are available as named exports in PascalCase.
- Compatible with SvelteKit and Svelte projects.

## Props

- `size` (number, default: 24)
- `color` (string, default: 'currentColor')
- `strokeWidth` (number, default: 2)
- `class` (string, optional)

## Contributing

We welcome contributions to `jis3r/icons`! Please read the [contribution guidelines](https://github.com/jis3r/icons/blob/master/CONTRIBUTING.md) carefully before submitting improvements and new icons:

## Terms of Use

Feel free to use these components in personal and commercial projects. However, while the tutorials and demos are available for your use as-is, they cannot be redistributed or resold. Let's keep things fair and respect each other's work.

If you have any questions or just want to say hi, feel free to reach out to me 👉 [@jis3r](https://twitter.com/jis3r).

## Notes

This project is a work in progress, and i'm continuously working to improve and expand this collection. I'd love to hear your feedback or see your contributions as the project evolves!

## Credits

Thank you to the awesome [Dmytro](https://twitter.com/pqoqubbw) 💜 for the idea and inspiration to animated lucide-icons! I loved his project so much that I wanted to make it available for the svelte ecosystem, so here we go! :)

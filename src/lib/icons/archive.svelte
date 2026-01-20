<script lang="ts">
	import type { IconProps } from './types.js';

	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate = false,
		class: className = ''
	}: IconProps = $props();

	function handleMouseEnter() {
		animate = true;
	}

	function handleMouseLeave() {
		animate = false;
	}
</script>

<div
	class={className}
	aria-label="archive"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<rect width="20" height="5" x="2" y="3" rx="1" class:animate-rect={animate} />
		<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" class:animate-path={animate} />
		<path d="M10 12h4" class:animate-path={animate} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	rect {
		transition: transform 0.2s ease-in;
	}

	.animate-rect {
		transform: translateY(-2px);
	}

	.animate-path {
		transform: translateY(2px);
		transition: transform 0.2s ease-in;
	}
</style>

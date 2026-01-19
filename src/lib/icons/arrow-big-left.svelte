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
		setTimeout(() => (animate = false), 200);
	}
</script>

<div class={className} aria-label="arrow-big-left" role="img" onmouseenter={handleMouseEnter}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class:animate
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M18 15h-6v4l-7-7 7-7v4h6v6z" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	svg {
		transition: transform 0.2s ease-out;
	}
	.animate {
		transform: translateX(-3px);
	}
</style>

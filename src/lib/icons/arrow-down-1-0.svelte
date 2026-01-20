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
	aria-label="arrow-down-1-0"
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
		<path d="m3 16 4 4 4-4" />
		<path d="M7 20V4" />
		<g class="swap-group-up" class:animate>
			<path d="M17 10V4h-2" />
			<path d="M15 10h4" />
		</g>
		<rect class="swap-group-down" class:animate x="15" y="14" width="4" height="6" ry="2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.swap-group-up,
	.swap-group-down {
		transform: translateY(0);
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.swap-group-up.animate {
		transform: translateY(10px);
	}

	.swap-group-down.animate {
		transform: translateY(-10px);
	}
</style>

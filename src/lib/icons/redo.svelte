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
	aria-label="redo"
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
		class="redo-icon"
		class:animate
	>
		<path d="M21 7v6h-6" />
		<path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.redo-icon {
		transform-origin: center 71.42857%; /* calc(20 / 28 * 100%) */
		transition: transform 0.3s ease;
	}

	.redo-icon.animate {
		transform: rotate(13deg);
	}
</style>

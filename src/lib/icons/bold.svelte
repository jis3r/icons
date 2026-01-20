<script lang="ts">
	import type { IconProps } from './types.js';

	let {
		color = 'currentColor',
		size = 28,
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
	aria-label="bold"
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
		class="bold-icon"
		class:animate
	>
		<path
			d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
			class="bold-path"
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.bold-icon {
		overflow: visible;
	}

	.bold-path {
		stroke-width: 2;
		transition: stroke-width 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.bold-icon.animate .bold-path {
		stroke-width: 3.5;
	}
</style>

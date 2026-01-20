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
	aria-label="between-vertical-end"
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
		<rect width="7" height="13" x="3" y="3" rx="1" class:animate class="rect-left" />
		<path d="m9 22 3-3 3 3" class:animate class="arrow" />
		<rect width="7" height="13" x="14" y="3" rx="1" class:animate class="rect-right" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.rect-left {
		transition: all 0.15s ease-in;
	}

	.rect-left.animate {
		transform: translateX(-1px);
	}

	.rect-right {
		transition: all 0.15s ease-in;
	}

	.rect-right.animate {
		transform: translateX(1px);
	}

	.arrow {
		transition: all 0.15s ease-in;
	}

	.arrow.animate {
		transform: translateY(-2px);
	}
</style>

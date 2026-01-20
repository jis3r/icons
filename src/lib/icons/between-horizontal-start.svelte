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
	aria-label="between-horizontal-start"
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
		<rect width="13" height="7" x="8" y="3" rx="1" class:animate class="rect-top" />
		<path d="m2 9 3 3-3 3" class:animate class="arrow" />
		<rect width="13" height="7" x="8" y="14" rx="1" class:animate class="rect-bottom" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.rect-top {
		transition: all 0.15s ease-in;
	}

	.rect-top.animate {
		transform: translateY(-1px);
	}

	.rect-bottom {
		transition: all 0.15s ease-in;
	}

	.rect-bottom.animate {
		transform: translateY(1px);
	}

	.arrow {
		transition: all 0.15s ease-in;
	}

	.arrow.animate {
		transform: translateX(2px);
	}
</style>

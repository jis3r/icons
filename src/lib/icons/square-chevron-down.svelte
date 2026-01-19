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
		if (animate) return;
		animate = true;
		setTimeout(() => {
			animate = false;
		}, 300);
	}
</script>

<div class={className} aria-label="square-chevron-down" role="img" onmouseenter={handleMouseEnter}>
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
		class="square-chevron-down"
		class:animate
	>
		<rect width="18" height="18" x="3" y="3" rx="2" />
		<path d="m16 10-4 4-4-4" class="chevron" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.square-chevron-down {
		overflow: visible;
	}

	.chevron {
		transition: transform 0.3s ease-in;
	}

	.square-chevron-down.animate .chevron {
		animation: bounceChevron 0.3s ease-in;
	}

	@keyframes bounceChevron {
		0%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(2px);
		}
	}
</style>

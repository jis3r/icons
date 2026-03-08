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
		}, 600);
	}
</script>

<div class={className} aria-label="square-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="square-x-icon"
		class:animate
	>
		<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
		<path d="m15 9-6 6" class="diagonal-1" />
		<path d="m9 9 6 6" class="diagonal-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.square-x-icon {
		overflow: visible;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 8.5;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.square-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.square-x-icon.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 8.5;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 8.5;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

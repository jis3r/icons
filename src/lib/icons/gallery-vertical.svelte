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
		}, 800);
	}
</script>

<div class={className} aria-label="gallery-vertical" role="img" onmouseenter={handleMouseEnter}>
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
		class="gallery-vertical-icon"
		class:animate
	>
		<path d="M3 2h18" class="gallery-path gallery-path-1" />
		<rect width="18" height="12" x="3" y="6" rx="2" class="gallery-rect" />
		<path d="M3 22h18" class="gallery-path gallery-path-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.gallery-vertical-icon {
		overflow: visible;
	}

	.gallery-path {
		opacity: 1;
		transform: scale(1) translateY(0);
		transform-origin: center;
	}

	.gallery-rect {
		opacity: 1;
		transform: scale(1);
		transform-origin: center;
	}

	.gallery-vertical-icon.animate .gallery-path-1 {
		animation: slideInTop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
	}

	.gallery-vertical-icon.animate .gallery-path-2 {
		animation: slideInBottom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
	}

	@keyframes slideInTop {
		0% {
			opacity: 0;
			transform: scale(0.8) translateY(4px);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	@keyframes slideInBottom {
		0% {
			opacity: 0;
			transform: scale(0.8) translateY(-4px);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}
</style>

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
		}, 1000);
	}
</script>

<div class={className} aria-label="search-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="search-x-icon"
		class:animate
	>
		<path d="m13.5 8.5-5 5" class="diagonal-1" />
		<path d="m8.5 8.5 5 5" class="diagonal-2" />
		<circle cx="11" cy="11" r="8" />
		<path d="m21 21-4.3-4.3" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.search-x-icon {
		overflow: visible;
		transition:
			transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			transform 1s ease-in-out;
	}

	.search-x-icon.animate {
		animation: search-bounce 1s ease-in-out;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 7.1;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.search-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.search-x-icon.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes search-bounce {
		0%,
		100% {
			transform: translateX(0) translateY(0);
		}
		25% {
			transform: translateX(0) translateY(-4px);
		}
		50% {
			transform: translateX(-3px) translateY(0);
		}
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 7.1;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 7.1;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

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
		}, 500);
	}
</script>

<div class={className} aria-label="arrow-right-left" role="img" onmouseenter={handleMouseEnter}>
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
		class:animate
	>
		<path d="M16 3l4 4-4 4" class="right-arrow" class:animate />
		<path d="M20 7H4" class="right-arrow" class:animate />
		<path d="M8 21l-4-4 4-4" class="left-arrow" class:animate />
		<path d="M4 17h16" class="left-arrow" class:animate />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.left-arrow,
	.right-arrow {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.left-arrow.animate {
		animation: moveLeft 0.5s;
	}

	.right-arrow.animate {
		animation: moveRight 0.5s;
	}

	@keyframes moveLeft {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(-3px);
		}
	}

	@keyframes moveRight {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(3px);
		}
	}
</style>

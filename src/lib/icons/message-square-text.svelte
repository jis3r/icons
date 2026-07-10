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

<div class={className} aria-label="message-square-text" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="message-square-text-group">
			<path
				d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
				class="message-square-text-path1"
			/>
			<path d="M13 8H7" class="message-square-text-path2" />
			<path d="M17 12H7" class="message-square-text-path3" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-square-text-group {
		transform-origin: bottom left;
	}

	.message-square-text-path2 {
		stroke-dasharray: 6;
		stroke-dashoffset: 0;
	}

	.message-square-text-path3 {
		stroke-dasharray: 10;
		stroke-dashoffset: 0;
	}

	.animate .message-square-text-group {
		animation: messageSquareTextGroupAnimation 0.8s ease-in-out;
	}

	.animate .message-square-text-path2 {
		animation: messageSquareTextPath2Animation 0.6s ease-in-out;
	}

	.animate .message-square-text-path3 {
		animation: messageSquareTextPath3Animation 0.6s ease-in-out;
	}

	@keyframes messageSquareTextGroupAnimation {
		0% {
			transform: rotate(0deg);
		}
		40% {
			transform: rotate(8deg);
		}
		60% {
			transform: rotate(-8deg);
		}
		80% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes messageSquareTextPath2Animation {
		0% {
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dashoffset: -6;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}

	@keyframes messageSquareTextPath3Animation {
		0% {
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dashoffset: -10;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}
</style>

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

<div class={className} aria-label="message-square-heart" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="message-square-heart-group">
			<path
				d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
				class="message-square-heart-path1"
			/>
			<path
				d="M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"
				class="message-square-heart-path2"
			/>
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-square-heart-group {
		transform-origin: bottom left;
	}

	.message-square-heart-path2 {
		transform-origin: center;
	}

	.animate .message-square-heart-group {
		animation: messageSquareHeartGroupAnimation 0.8s ease-in-out;
	}

	.animate .message-square-heart-path2 {
		animation: messageSquareHeartPath2Animation 0.8s ease-in-out;
	}

	@keyframes messageSquareHeartGroupAnimation {
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

	@keyframes messageSquareHeartPath2Animation {
		0% {
			transform: scale(1);
		}
		25% {
			transform: scale(0.7);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>

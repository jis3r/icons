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

<div class={className} aria-label="message-circle-heart" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="message-circle-heart-group">
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" class="message-circle-heart-path1" />
			<path
				d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"
				class="message-circle-heart-path2"
			/>
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-circle-heart-group {
		transform-origin: bottom left;
	}

	.message-circle-heart-path2 {
		transform-origin: center;
	}

	.animate .message-circle-heart-group {
		animation: messageCircleHeartGroupAnimation 0.8s ease-in-out;
	}

	.animate .message-circle-heart-path2 {
		animation: messageCircleHeartPath2Animation 0.8s ease-in-out;
	}

	@keyframes messageCircleHeartGroupAnimation {
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

	@keyframes messageCircleHeartPath2Animation {
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

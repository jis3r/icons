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

<div class={className} aria-label="message-square-dot" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="message-square-dot-group">
			<path
				d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"
				class="message-square-dot-path"
			/>
			<circle cx="18" cy="6" r="3" class="message-square-dot-circle" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-square-dot-group {
		transform-origin: bottom left;
	}

	.animate .message-square-dot-group {
		animation: messageSquareDotGroupAnimation 0.8s ease-in-out;
	}

	.animate .message-square-dot-circle {
		animation: messageSquareDotCircleAnimation 0.6s ease-in-out;
	}

	@keyframes messageSquareDotGroupAnimation {
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

	@keyframes messageSquareDotCircleAnimation {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-2px, 2px);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>

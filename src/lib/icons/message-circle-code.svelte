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

<div class={className} aria-label="message-circle-code" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="message-circle-code-group">
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" class="message-circle-code-path1" />
			<path d="M10 9.5 8 12l2 2.5" class="message-circle-code-path2" />
			<path d="m14 9.5 2 2.5-2 2.5" class="message-circle-code-path3" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-circle-code-group {
		transform-origin: bottom left;
	}

	.animate .message-circle-code-group {
		animation: messageCircleCodeGroupAnimation 0.8s ease-in-out;
	}

	.animate .message-circle-code-path2 {
		animation: messageCircleCodePath2Animation 0.6s ease-in-out;
	}

	.animate .message-circle-code-path3 {
		animation: messageCircleCodePath3Animation 0.6s ease-in-out;
	}

	@keyframes messageCircleCodeGroupAnimation {
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

	@keyframes messageCircleCodePath2Animation {
		0% {
			transform: translateX(0);
		}
		33.33% {
			transform: translateX(-1.5px);
		}
		66.67% {
			transform: translateX(0.75px);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes messageCircleCodePath3Animation {
		0% {
			transform: translateX(0);
		}
		33.33% {
			transform: translateX(1.5px);
		}
		66.67% {
			transform: translateX(-0.75px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>

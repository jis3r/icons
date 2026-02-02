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

<div class={className} aria-label="message-square-code" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="message-square-code-group">
			<path
				d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
				class="message-square-code-path1"
			/>
			<path d="M10 7.5 8 10l2 2.5" class="message-square-code-path2" />
			<path d="m14 7.5 2 2.5-2 2.5" class="message-square-code-path3" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-square-code-group {
		transform-origin: bottom left;
	}

	.animate .message-square-code-group {
		animation: messageSquareCodeGroupAnimation 0.8s ease-in-out;
	}

	.animate .message-square-code-path2 {
		animation: messageSquareCodePath2Animation 0.6s ease-in-out;
	}

	.animate .message-square-code-path3 {
		animation: messageSquareCodePath3Animation 0.6s ease-in-out;
	}

	@keyframes messageSquareCodeGroupAnimation {
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

	@keyframes messageSquareCodePath2Animation {
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

	@keyframes messageSquareCodePath3Animation {
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

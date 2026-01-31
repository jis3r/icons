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

<div class={className} aria-label="message-square-quote" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="message-square-quote-group">
			<path
				d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
				class="message-square-quote-path1"
			/>
			<path d="M8 12a2 2 0 0 0 2-2V8H8" class="message-square-quote-path2" />
			<path d="M14 12a2 2 0 0 0 2-2V8h-2" class="message-square-quote-path3" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-square-quote-group {
		transform-origin: bottom left;
	}

	.animate .message-square-quote-group {
		animation: messageSquareQuoteGroupAnimation 0.8s ease-in-out;
	}

	.animate .message-square-quote-path2 {
		animation: messageSquareQuotePath2Animation 0.6s ease-in-out;
	}

	.animate .message-square-quote-path3 {
		animation: messageSquareQuotePath3Animation 0.6s ease-in-out;
	}

	@keyframes messageSquareQuoteGroupAnimation {
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

	@keyframes messageSquareQuotePath2Animation {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(1.5px, -0.5px);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	@keyframes messageSquareQuotePath3Animation {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(1px, -0.5px);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>

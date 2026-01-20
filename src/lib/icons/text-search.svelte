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

<div class={className} aria-label="text-search" role="img" onmouseenter={handleMouseEnter}>
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
		class="text-search-icon"
		class:animate
	>
		<path d="M21 5H3" class="line top" />
		<g class="text-group">
			<path d="M10 12H3" class="line middle" />
			<path d="M10 19H3" class="line bottom" />
		</g>

		<g class="magnifier">
			<circle cx="17" cy="15" r="3" />
			<path d="m21 19-1.9-1.9" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.text-search-icon {
		overflow: visible;
	}

	.line {
		transition: opacity 0.1s ease-out;
	}
	.top,
	.middle,
	.bottom {
		transform-origin: left center;
	}

	.magnifier {
		transform-origin: 17px 15px;
	}
	.text-search-icon.animate .magnifier {
		animation: search-bounce 1s ease-in-out;
	}

	.text-search-icon.animate .top {
		animation: line-shrink-top 1s ease-in-out;
	}
	.text-search-icon.animate .middle {
		animation: line-shrink-mid 1s ease-in-out;
	}
	.text-search-icon.animate .bottom {
		animation: line-shrink-bot 1s ease-in-out 0.05s;
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

	@keyframes line-shrink-mid {
		0%,
		25%,
		100% {
			transform: scaleX(1);
		}
		50% {
			transform: scaleX(0.7);
		}
	}
	@keyframes line-shrink-bot {
		0%,
		30%,
		100% {
			transform: scaleX(1);
		}
		50% {
			transform: scaleX(0.8);
		}
	}
</style>

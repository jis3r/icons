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
		}, 400);
	}
</script>

<div class={className} aria-label="snowflake" role="img" onmouseenter={handleMouseEnter}>
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
		class="snowflake-icon"
		class:animate
	>
		<path d="m10 20-1.25-2.5L6 18" />
		<path d="M10 4 8.75 6.5 6 6" />
		<path d="m14 20 1.25-2.5L18 18" />
		<path d="m14 4 1.25 2.5L18 6" />
		<path d="m17 21-3-6h-4" />
		<path d="m17 3-3 6 1.5 3" />
		<path d="M2 12h6.5L10 9" />
		<path d="m20 10-1.5 2 1.5 2" />
		<path d="M22 12h-6.5L14 15" />
		<path d="m4 10 1.5 2L4 14" />
		<path d="m7 21 3-6-1.5-3" />
		<path d="m7 3 3 6h4" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.snowflake-icon {
		transform-origin: center;
	}

	.snowflake-icon.animate {
		animation: rotate 0.4s ease-in-out;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-5deg);
		}
		40% {
			transform: rotate(5deg);
		}
		60% {
			transform: rotate(-5deg);
		}
		80% {
			transform: rotate(5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

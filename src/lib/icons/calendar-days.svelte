<script lang="ts">
	import type { IconProps } from './types.js';

	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate = false,
		class: className = ''
	}: IconProps = $props();

	const DOTS = [
		{ cx: 8, cy: 14 },
		{ cx: 12, cy: 14 },
		{ cx: 16, cy: 14 },
		{ cx: 8, cy: 18 },
		{ cx: 12, cy: 18 },
		{ cx: 16, cy: 18 }
	];

	function handleMouseEnter() {
		if (animate) return;
		animate = true;
		setTimeout(() => {
			animate = false;
		}, 1400);
	}
</script>

<div class={className} aria-label="calendar-days" role="img" onmouseenter={handleMouseEnter}>
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
	>
		<path d="M8 2v4" />
		<path d="M16 2v4" />
		<rect width="18" height="18" x="3" y="4" rx="2" />
		<path d="M3 10h18" />
		{#each DOTS as dot, index}
			<circle
				cx={dot.cx}
				cy={dot.cy}
				r="1"
				fill={color}
				stroke="none"
				class="dot"
				class:animate
				style="animation-delay: {index * 0.17}s"
			/>
		{/each}
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.dot {
		opacity: 1;
		transition: opacity 0.2s;
	}

	.dot.animate {
		animation: pulse 0.8s;
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 1;
		}
	}
</style>

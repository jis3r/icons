<script>
	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();

	const DOTS = [
		{ cx: 8, cy: 14 },
		{ cx: 12, cy: 14 },
		{ cx: 16, cy: 14 },
		{ cx: 8, cy: 18 },
		{ cx: 12, cy: 18 },
		{ cx: 16, cy: 18 }
	];

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="calendar-days"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
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
				class:animate={isHovered}
				style="animation-delay: {index * 0.17}s"
			/>
		{/each}
	</svg>
</div>

<style>
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

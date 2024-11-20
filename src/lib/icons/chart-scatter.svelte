<script>
	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();
	const dots = [
		{ cx: 7.5, cy: 7.5, delay: 2 },
		{ cx: 18.5, cy: 5.5, delay: 5 },
		{ cx: 11.5, cy: 11.5, delay: 3 },
		{ cx: 7.5, cy: 16.5, delay: 1 },
		{ cx: 17.5, cy: 14.5, delay: 4 }
	];

	function handleMouseEnter() {
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 900);
	}
</script>

<div class={classes} aria-label="chart-scatter" role="img" onmouseenter={handleMouseEnter}>
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
		class="chart-scatter-icon"
		class:animate={isHovered}
	>
		{#each dots as dot, i}
			<circle
				cx={dot.cx}
				cy={dot.cy}
				r="0.5"
				fill={color}
				class="dot"
				style="--delay: {dot.delay * 0.15}s"
			/>
		{/each}
		<path d="M3 3v16a2 2 0 0 0 2 2h16" />
	</svg>
</div>

<style>
	.chart-scatter-icon {
		overflow: visible;
	}

	.dot {
		opacity: 1;
		transform: scale(1);
		transition: opacity 0.2s;
	}

	.chart-scatter-icon.animate .dot {
		opacity: 0;
		animation: popIn 0.3s ease-out forwards;
		animation-delay: var(--delay);
	}

	@keyframes popIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

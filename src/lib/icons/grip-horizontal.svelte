<script>
	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();

	const circles = [
		{ cx: 12, cy: 9, delay: 0 }, // Center top
		{ cx: 19, cy: 9, delay: 0.05 }, // Right top
		{ cx: 5, cy: 9, delay: 0.1 }, // Left top
		{ cx: 12, cy: 15, delay: 0.15 }, // Center bottom
		{ cx: 19, cy: 15, delay: 0.2 }, // Right bottom
		{ cx: 5, cy: 15, delay: 0.25 } // Left bottom
	];

	function handleMouseEnter() {
		if (isHovered) return;
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 1600);
	}
</script>

<div class={classes} aria-label="grip-horizontal" role="img" onmouseenter={handleMouseEnter}>
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
		class="grip-horizontal-icon"
	>
		{#each circles as { cx, cy, delay }}
			<circle
				{cx}
				{cy}
				r="1"
				class="grip-circle"
				class:animate={isHovered}
				style="animation-delay: {delay}s;"
			/>
		{/each}
	</svg>
</div>

<style>
	.grip-horizontal-icon {
		overflow: visible;
	}

	.grip-circle {
		opacity: 1;
	}

	@keyframes fadeInOut {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.3;
		}
	}

	.grip-circle.animate {
		animation: fadeInOut 0.8s ease-in-out forwards;
	}
</style>

<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [color]
	 * @property {number} [size]
	 * @property {number} [strokeWidth]
	 * @property {boolean} [isHovered]
	 * @property {string} [class]
	 */

	/** @type {Props} */
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		isHovered = false,
		class: className = ''
	} = $props();

	const circles = [
		{ cx: 9, cy: 5, delay: 0 }, // Left top
		{ cx: 15, cy: 5, delay: 0.05 }, // Right top
		{ cx: 9, cy: 12, delay: 0.1 }, // Left center
		{ cx: 15, cy: 12, delay: 0.15 }, // Right center
		{ cx: 9, cy: 19, delay: 0.2 }, // Left bottom
		{ cx: 15, cy: 19, delay: 0.25 } // Right bottom
	];

	function handleMouseEnter() {
		if (isHovered) return;
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 1600);
	}
</script>

<div class={className} aria-label="grip-vertical" role="img" onmouseenter={handleMouseEnter}>
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
		class="grip-vertical-icon"
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
	div {
		display: inline-block;
	}
	.grip-vertical-icon {
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

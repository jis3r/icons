<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [color]
	 * @property {number} [size]
	 * @property {number} [strokeWidth]
	 * @property {boolean} [animate]
	 * @property {string} [class]
	 */

	/** @type {Props} */
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate = false,
		class: className = ''
	} = $props();

	const circles = [
		{ cx: 19, cy: 5, delay: 0 }, // Top right
		{ cx: 12, cy: 5, delay: 0.05 }, // Top middle
		{ cx: 19, cy: 12, delay: 0.1 }, // Middle right
		{ cx: 5, cy: 5, delay: 0.15 }, // Top left
		{ cx: 12, cy: 12, delay: 0.2 }, // Center
		{ cx: 19, cy: 19, delay: 0.25 }, // Bottom right
		{ cx: 5, cy: 12, delay: 0.3 }, // Middle left
		{ cx: 12, cy: 19, delay: 0.35 }, // Bottom middle
		{ cx: 5, cy: 19, delay: 0.4 } // Bottom left
	];

	function handleMouseEnter() {
		if (animate) return;
		animate = true;

		setTimeout(() => {
			animate = false;
		}, 1600);
	}
</script>

<div class={className} aria-label="grip" role="img" onmouseenter={handleMouseEnter}>
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
		class="grip-icon"
	>
		{#each circles as { cx, cy, delay }}
			<circle
				{cx}
				{cy}
				r="1"
				class="grip-circle"
				class:animate
				style="animation-delay: {delay}s;"
			/>
		{/each}
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.grip-icon {
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
		animation: fadeInOut 0.8s ease-in forwards;
	}
</style>

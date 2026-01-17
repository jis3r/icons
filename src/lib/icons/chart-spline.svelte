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

	function handleMouseEnter() {
		if (animate) return;
		animate = true;
		setTimeout(() => {
			animate = false;
		}, 700);
	}
</script>

<div class={className} aria-label="chart-spline" role="img" onmouseenter={handleMouseEnter}>
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
		class="chart-spline-icon"
		class:animate
	>
		<path d="M3 3v16a2 2 0 0 0 2 2h16" class="frame" />
		<path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" class="spline" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.chart-spline-icon {
		overflow: visible;
	}

	.spline {
		stroke-dasharray: 24;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.chart-spline-icon.animate .spline {
		animation: splineAnimation 0.6s ease backwards;
	}

	@keyframes splineAnimation {
		0% {
			stroke-dashoffset: 24;
			opacity: 1;
		}
		15% {
			stroke-dashoffset: 24;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

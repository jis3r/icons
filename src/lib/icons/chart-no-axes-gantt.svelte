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

	function handleMouseEnter() {
		isHovered = true;
		setTimeout(() => {
			isHovered = false;
		}, 700);
	}
</script>

<div class={className} aria-label="chart-no-axes-gantt" role="img" onmouseenter={handleMouseEnter}>
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
		class="chart-no-axes-gantt-icon"
		class:animate={isHovered}
	>
		<path d="M8 6h10" class="line line-0" />
		<path d="M6 12h9" class="line line-1" />
		<path d="M11 18h7" class="line line-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.chart-no-axes-gantt-icon {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 10;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.chart-no-axes-gantt-icon.animate .line {
		animation: lineAnimation 0.6s ease forwards;
	}

	.chart-no-axes-gantt-icon.animate .line-0 {
		animation-delay: 0s;
	}

	.chart-no-axes-gantt-icon.animate .line-1 {
		animation-delay: 0.1s;
	}

	.chart-no-axes-gantt-icon.animate .line-2 {
		animation-delay: 0.2s;
	}

	@keyframes lineAnimation {
		0% {
			stroke-dashoffset: 10;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

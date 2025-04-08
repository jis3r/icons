<script>
	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();

	function handleMouseEnter() {
		isHovered = true;
		setTimeout(() => {
			isHovered = false;
		}, 700);
	}
</script>

<div class={classes} aria-label="chart-gantt" role="img" onmouseenter={handleMouseEnter}>
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
		class="chart-gantt-icon"
		class:animate={isHovered}
	>
		<path d="M10 6h8" class="line line-0" />
		<path d="M8 11h7" class="line line-1" />
		<path d="M12 16h6" class="line line-2" />
		<path d="M3 3v16a2 2 0 0 0 2 2h16" class="frame" />
	</svg>
</div>

<style>
	.chart-gantt-icon {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 10;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.chart-gantt-icon.animate .line {
		animation: lineAnimation 0.6s ease forwards;
	}

	.chart-gantt-icon.animate .line-0 {
		animation-delay: 0s;
	}

	.chart-gantt-icon.animate .line-1 {
		animation-delay: 0.1s;
	}

	.chart-gantt-icon.animate .line-2 {
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

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

<div class={classes} aria-label="square-chart-gantt" role="img" onmouseenter={handleMouseEnter}>
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
		class="square-chart-gantt-icon"
		class:animate={isHovered}
	>
		<rect width="18" height="18" x="3" y="3" rx="2" />
		<path d="M9 8h7" class="line line-0" />
		<path d="M8 12h6" class="line line-1" />
		<path d="M11 16h5" class="line line-2" />
	</svg>
</div>

<style>
	.square-chart-gantt-icon {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 10;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.square-chart-gantt-icon.animate .line {
		animation: lineAnimation 0.6s ease forwards;
	}

	.square-chart-gantt-icon.animate .line-0 {
		animation-delay: 0s;
	}

	.square-chart-gantt-icon.animate .line-1 {
		animation-delay: 0.1s;
	}

	.square-chart-gantt-icon.animate .line-2 {
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

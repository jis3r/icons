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

<div class={classes} aria-label="chart-bar-decreasing" role="img" onmouseenter={handleMouseEnter}>
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
		class="chart-bar-decreasing-icon"
		class:animate={isHovered}
	>
		<path d="M3 3v16a2 2 0 0 0 2 2h16" class="frame" />
		<path d="M7 11h8" class="bar bar-1" />
		<path d="M7 16h3" class="bar bar-2" />
		<path d="M7 6h12" class="bar bar-0" />
	</svg>
</div>

<style>
	.chart-bar-decreasing-icon {
		overflow: visible;
	}

	.bar {
		stroke-dasharray: 12;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.chart-bar-decreasing-icon.animate .bar {
		animation: barAnimation 0.6s ease forwards;
	}

	.chart-bar-decreasing-icon.animate .bar-0 {
		animation-delay: 0s;
	}

	.chart-bar-decreasing-icon.animate .bar-1 {
		animation-delay: 0.1s;
	}

	.chart-bar-decreasing-icon.animate .bar-2 {
		animation-delay: 0.2s;
	}

	@keyframes barAnimation {
		0% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
		50% {
			stroke-dashoffset: 12;
			opacity: 0;
		}
		51% {
			stroke-dashoffset: 12;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

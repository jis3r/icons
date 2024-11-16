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

<div class={classes} aria-label="chart-no-axes-column" role="img" onmouseenter={handleMouseEnter}>
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
		class="chart-no-axes-column-icon"
		class:animate={isHovered}
	>
		<line x1="18" y1="20" x2="18" y2="10" class="column column-2" />
		<line x1="12" y1="20" x2="12" y2="4" class="column column-1" />
		<line x1="6" y1="20" x2="6" y2="14" class="column column-0" />
	</svg>
</div>

<style>
	.chart-no-axes-column-icon {
		overflow: visible;
	}

	.column {
		stroke-dasharray: 20;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.chart-no-axes-column-icon.animate .column {
		animation: columnAnimation 0.6s ease forwards;
	}

	.chart-no-axes-column-icon.animate .column-0 {
		animation-delay: 0s;
	}

	.chart-no-axes-column-icon.animate .column-1 {
		animation-delay: 0.1s;
	}

	.chart-no-axes-column-icon.animate .column-2 {
		animation-delay: 0.2s;
	}

	@keyframes columnAnimation {
		0% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
		50% {
			stroke-dashoffset: 20;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

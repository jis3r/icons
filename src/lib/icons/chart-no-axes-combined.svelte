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
		}, 1000);
	}
</script>

<div class={classes} aria-label="chart-no-axes-combined" role="img" onmouseenter={handleMouseEnter}>
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
		class="chart-no-axes-combined-icon"
		class:animate={isHovered}
	>
		<path d="M4 18v3" class="column column-0" />
		<path d="M8 14v7" class="column column-1" />
		<path d="M12 16v5" class="column column-2" />
		<path d="M16 14v7" class="column column-3" />
		<path d="M20 10v11" class="column column-4" />
		<path
			d="M2 15l6.647-6.646a.5.5 0 0 1 .707 0L12.646 11.646a.5.5 0 0 0 .707 0L22 3"
			class="line"
		/>
	</svg>
</div>

<style>
	.chart-no-axes-combined-icon {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 28;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.chart-no-axes-combined-icon.animate .line {
		animation: lineAnimation 0.9s ease backwards;
		animation-delay: 0.1s;
	}

	.column {
		stroke-dasharray: 20;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.chart-no-axes-combined-icon.animate .column {
		animation: columnAnimation 0.5s ease backwards;
	}

	.chart-no-axes-combined-icon.animate .column-0 {
		animation-delay: 0s;
	}

	.chart-no-axes-combined-icon.animate .column-1 {
		animation-delay: 0.1s;
	}

	.chart-no-axes-combined-icon.animate .column-2 {
		animation-delay: 0.2s;
	}

	.chart-no-axes-combined-icon.animate .column-3 {
		animation-delay: 0.3s;
	}

	.chart-no-axes-combined-icon.animate .column-4 {
		animation-delay: 0.4s;
	}

	@keyframes lineAnimation {
		0% {
			stroke-dashoffset: 28;
			opacity: 0;
		}
		15% {
			stroke-dashoffset: 28;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
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

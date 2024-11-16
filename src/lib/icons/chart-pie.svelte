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
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="chart-pie"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
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
		class="chart-pie-icon"
		class:animate={isHovered}
	>
		<path
			d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
			class="pie-slice"
		/>
		<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
	</svg>
</div>

<style>
	.chart-pie-icon {
		overflow: visible;
	}

	.pie-slice {
		transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.5);
	}

	.chart-pie-icon.animate .pie-slice {
		transform: translate(1.1px, -1.1px);
	}
</style>

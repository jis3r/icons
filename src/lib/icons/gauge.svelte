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
	aria-label="gauge"
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
		class="gauge-icon"
		class:animate={isHovered}
	>
		<path d="m12 14 4-4" class="gauge-needle" />
		<path d="M3.34 19a10 10 0 1 1 17.32 0" />
	</svg>
</div>

<style>
	.gauge-icon {
		overflow: visible;
	}

	.gauge-needle {
		transform-origin: 12px 14px;
		transition: transform 0.6s cubic-bezier(0.16, 1.4, 0.3, 1);
	}

	.gauge-icon.animate .gauge-needle {
		transform: rotate(72deg);
	}
</style>

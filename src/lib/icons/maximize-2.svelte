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
	aria-label="maximize-2"
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
	>
		<polyline points="15 3 21 3 21 9" class:top-right={isHovered} />
		<polyline points="9 21 3 21 3 15" class:bottom-left={isHovered} />
		<line x1="21" x2="14" y1="3" y2="10" class:top-right={isHovered} />
		<line x1="3" x2="10" y1="21" y2="14" class:bottom-left={isHovered} />
	</svg>
</div>

<style>
	polyline,
	line {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.top-right {
		transform: translate(2px, -2px);
	}
	.bottom-left {
		transform: translate(-2px, 2px);
	}
</style>

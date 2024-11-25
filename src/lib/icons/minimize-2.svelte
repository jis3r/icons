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
	aria-label="minimize-2"
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
		<polyline points="4 14 10 14 10 20" class:bottom-left={isHovered} />
		<polyline points="20 10 14 10 14 4" class:top-right={isHovered} />
		<line x1="14" x2="21" y1="10" y2="3" class:top-right={isHovered} />
		<line x1="3" x2="10" y1="21" y2="14" class:bottom-left={isHovered} />
	</svg>
</div>

<style>
	polyline,
	line {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.bottom-left {
		transform: translate(1px, -1px);
	}
	.top-right {
		transform: translate(-1px, 1px);
	}
</style>

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
	aria-label="crop"
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
		<path d="M6 2v14a2 2 0 0 0 2 2h14" class:bottom-left={isHovered} />
		<path d="M18 22V8a2 2 0 0 0-2-2H2" class:top-right={isHovered} />
	</svg>
</div>

<style>
	path {
		transition: transform 0.3s ease;
	}
	.bottom-left {
		transform: translate(1px, -1px);
	}
	.top-right {
		transform: translate(-1px, 1px);
	}
</style>

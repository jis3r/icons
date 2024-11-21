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
	aria-label="minimize"
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
		<path d="M8 3v3a2 2 0 0 1-2 2H3" class:top-left={isHovered} />
		<path d="M21 8h-3a2 2 0 0 1-2-2V3" class:top-right={isHovered} />
		<path d="M3 16h3a2 2 0 0 1 2 2v3" class:bottom-left={isHovered} />
		<path d="M16 21v-3a2 2 0 0 1 2-2h3" class:bottom-right={isHovered} />
	</svg>
</div>

<style>
	path {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.bottom-right {
		transform: translate(-1px, -1px);
	}

	.top-left {
		transform: translate(1px, 1px);
	}

	.bottom-left {
		transform: translate(1px, -1px);
	}

	.top-right {
		transform: translate(-1px, 1px);
	}
</style>

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
	aria-label="shrink"
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
		<path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" class:animate3={isHovered} />
		<path d="M9 19.8V15m0 0H4.2M9 15l-6 6" class:animate2={isHovered} />
		<path d="M15 4.2V9m0 0h4.8M15 9l6-6" class:animate1={isHovered} />
		<path d="M9 4.2V9m0 0H4.2M9 9 3 3" class:animate0={isHovered} />
	</svg>
</div>

<style>
	path {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.animate0 {
		transform: translate(1px, 1px);
	}
	.animate1 {
		transform: translate(-1px, 1px);
	}
	.animate2 {
		transform: translate(1px, -1px);
	}
	.animate3 {
		transform: translate(-1px, -1px);
	}
</style>

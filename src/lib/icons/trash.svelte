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
	aria-label="trash"
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
		<g class:is-animated={isHovered}>
			<path d="M3 6h18" />
			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
		</g>
		<path d="M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8" class:animate-path={isHovered} />
	</svg>
</div>

<style>
	.is-animated {
		transform: translateY(-1px);
		transition: transform 0.2s ease-in;
	}

	.animate-path {
		transform: translateY(1px);
		transition: transform 0.2s ease-in;
	}

	.is-animated-line {
		transition: all 0.2s ease-in;
	}

	.is-animated-path {
		transition: all 0.2s ease-in;
	}
</style>

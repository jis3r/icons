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
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	aria-label="hard-drive-download"
	role="img"
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
		<g class:animate={isHovered}>
			<path d="M12 2v8" />
			<path d="m16 6-4 4-4-4" />
		</g>
		<rect width="20" height="8" x="2" y="14" rx="2" />
		<path d="M6 18h.01" />
		<path d="M10 18h.01" />
	</svg>
</div>

<style>
	g.animate path {
		transform: translateY(2px);
		transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}
	g path {
		transform: translateY(0);
		transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}
</style>

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
	aria-label="download"
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
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
		<g class:animate={isHovered}>
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" x2="12" y1="15" y2="3" />
		</g>
	</svg>
</div>

<style>
	g.animate polyline,
	g.animate line {
		transform: translateY(2px);
		transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}

	g polyline,
	g line {
		transform: translateY(0);
		transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}
</style>

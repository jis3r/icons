<script>
	let { color = 'currentColor', isHovered = false, classes = '' } = $props();

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="frame-icon"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="28"
		height="28"
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<line
			class:animate-line={isHovered}
			x1="22"
			x2="2"
			y1="6"
			y2="6"
			style:transform={isHovered ? 'translateY(-4px)' : 'translateY(0)'}
			style:transition="transform 0.17s ease-in-out"
		/>
		<line
			class:animate-line={isHovered}
			x1="22"
			x2="2"
			y1="18"
			y2="18"
			style:transform={isHovered ? 'translateY(4px)' : 'translateY(0)'}
			style:transition="transform 0.17s ease-in-out"
		/>
		<line
			class:animate-line={isHovered}
			x1="6"
			x2="6"
			y1="2"
			y2="22"
			style:transform={isHovered ? 'translateX(-4px)' : 'translateX(0)'}
			style:transition="transform 0.17s ease-in-out"
		/>
		<line
			class:animate-line={isHovered}
			x1="18"
			x2="18"
			y1="2"
			y2="22"
			style:transform={isHovered ? 'translateX(4px)' : 'translateX(0)'}
			style:transition="transform 0.17s ease-in-out"
		/>
	</svg>
</div>

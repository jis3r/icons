<script>
	let { color = 'currentColor', isHovered = false, classes = '' } = $props();

	function handleMouseEnter() {
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 200);
	}
</script>

<div class={classes} aria-label="arrow-left" role="img" onmouseenter={handleMouseEnter}>
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
		<path d="m12 19-7-7 7-7" class:head={isHovered} />
		<path d={isHovered ? 'M19 12H10' : 'M19 12H5'} class:line={isHovered} />
	</svg>
</div>

<style>
	path {
		transition: all 0.2s ease-in;
	}

	.head {
		transform: translateX(3px);
	}

	.line {
		transition: d 0.2s ease-in;
	}
</style>

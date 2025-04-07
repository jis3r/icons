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
		setTimeout(() => {
			isHovered = false;
		}, 200);
	}
</script>

<div class={classes} aria-label="circle-arrow-right" role="img" onmouseenter={handleMouseEnter}>
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
		<circle cx="12" cy="12" r="10" />
		<path d="M8 12H12" />
		<path d="M12 12H16" class:head={isHovered} />
		<path d="m12 16 4-4-4-4" class:head={isHovered} />
	</svg>
</div>

<style>
	path {
		transition: all 0.2s ease-out;
	}
	.head {
		transform: translateX(-1.5px);
	}
</style>

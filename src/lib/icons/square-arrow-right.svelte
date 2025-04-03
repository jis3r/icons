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

<div class={classes} aria-label="square-arrow-right" role="img" onmouseenter={handleMouseEnter}>
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
		<rect width="18" height="18" x="3" y="3" rx="2" />
		<!-- Static left side of the horizontal line -->
		<path d="M8 12H12" />
		<!-- Animated right side of the horizontal line -->
		<path d="M12 12H16" class:head={isHovered} />
		<!-- Animated arrow head -->
		<path d="M12 16 L16 12 L12 8" class:head={isHovered} />
	</svg>
</div>

<style>
	path {
		transition: all 0.2s ease-out;
	}
	.head {
		transform: translateX(-3px);
	}
</style>

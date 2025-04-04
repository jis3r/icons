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
		setTimeout(() => (isHovered = false), 200);
	}
</script>

<div class={classes} aria-label="arrow-big-right-dash" role="img" onmouseenter={handleMouseEnter}>
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
		<path class:animate-dash={isHovered} d="M5 9v6" />
		<path class:animate-arrow={isHovered} d="M9 9h3V5l7 7-7 7v-4H9V9z" />
	</svg>
</div>

<style>
	svg path {
		transition: transform 0.2s ease-out;
	}
	.animate-arrow {
		transform: translateX(3px);
	}
	.animate-dash {
		transform: translateX(1px);
	}
</style>

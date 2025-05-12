<script>
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		isHovered = false,
		class: className = ''
	} = $props();

	function handleMouseEnter() {
		isHovered = true;
		setTimeout(() => (isHovered = false), 200);
	}
</script>

<div class={className} aria-label="arrow-big-up-dash" role="img" onmouseenter={handleMouseEnter}>
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
		<path class:animate-dash={isHovered} d="M9 19h6" />
		<path class:animate-arrow={isHovered} d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
	</svg>
</div>

<style>
	svg path {
		transition: transform 0.2s ease-out;
	}
	.animate-arrow {
		transform: translateY(-3px);
	}
	.animate-dash {
		transform: translateY(-1px);
	}
</style>

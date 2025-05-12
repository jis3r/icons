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
		setTimeout(() => {
			isHovered = false;
		}, 200);
	}
</script>

<div class={className} aria-label="arrow-up-left" role="img" onmouseenter={handleMouseEnter}>
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
		<path d="M7 17V7h10" class:head={isHovered} />
		<path d="M12 12 L7 7" class:head={isHovered} />
		<path d="M17 17 L12 12" />
	</svg>
</div>

<style>
	path {
		transition: all 0.2s ease-out;
	}
	/* Arrow is pointing up-left, so head moves down-right */
	.head {
		transform: translate(3px, 3px);
	}
</style>

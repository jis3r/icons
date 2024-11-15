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

<div class={classes} aria-label="chevrons-right" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-right-icon"
		class:chevron-right={isHovered}
	>
		<path d="m6 17 5-5-5-5" />
		<path d="m13 17 5-5-5-5" />
	</svg>
</div>

<style>
	.chevrons-right-icon {
		overflow: visible;
		transition: all 0.2s ease-in;
	}

	.chevron-right {
		transform: translateX(3px);
	}
</style>

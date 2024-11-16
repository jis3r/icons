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

<div class={classes} aria-label="chevrons-right-left" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-right-left-icon"
	>
		<path d="m20 17-5-5 5-5" class:chevron-left={isHovered} />
		<path d="m4 17 5-5-5-5" class:chevron-right={isHovered} />
	</svg>
</div>

<style>
	.chevrons-right-left-icon {
		overflow: visible;
	}

	.chevrons-right-left-icon path {
		transition: all 0.2s ease-in;
	}

	.chevron-left {
		transform: translateX(-3px);
	}

	.chevron-right {
		transform: translateX(3px);
	}
</style>

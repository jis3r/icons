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

<div class={classes} aria-label="chevrons-up-down" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-up-down-icon"
	>
		<path d="m7 15 5 5 5-5" class:chevron-down={isHovered} />
		<path d="m7 9 5-5 5 5" class:chevron-up={isHovered} />
	</svg>
</div>

<style>
	.chevrons-up-down-icon {
		overflow: visible;
	}

	.chevrons-up-down-icon path {
		transition: all 0.2s ease-in;
	}

	.chevron-up {
		transform: translateY(-3px);
	}

	.chevron-down {
		transform: translateY(3px);
	}
</style>

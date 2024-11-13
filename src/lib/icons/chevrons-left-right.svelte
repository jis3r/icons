<script>
	let { color = 'currentColor', isHovered = false, classes = '' } = $props();

	function handleMouseEnter() {
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 200);
	}
</script>

<div class={classes} aria-label="chevrons-left-right" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-left-right-icon"
	>
		<path d="m9 7-5 5 5 5" class:chevron-left={isHovered} />
		<path d="m15 7 5 5-5 5" class:chevron-right={isHovered} />
	</svg>
</div>

<style>
	.chevrons-left-right-icon {
		overflow: visible;
	}

	.chevrons-left-right-icon path {
		transition: all 0.2s ease-in;
	}

	.chevron-left {
		transform: translateX(-3px);
	}

	.chevron-right {
		transform: translateX(3px);
	}
</style>

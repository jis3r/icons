<script>
	let { color = 'currentColor', isHovered = false, classes = '' } = $props();

	function handleMouseEnter() {
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 200);
	}
</script>

<div class={classes} aria-label="chevrons-down" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-down-icon"
		class:chevron-down={isHovered}
	>
		<path d="m7 6 5 5 5-5" />
		<path d="m7 13 5 5 5-5" />
	</svg>
</div>

<style>
	.chevrons-down-icon {
		overflow: visible;
		transition: all 0.2s ease-in;
	}

	.chevron-down {
		transform: translateY(3px);
	}
</style>

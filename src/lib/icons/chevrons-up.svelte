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

<div class={classes} aria-label="chevrons-up" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-up-icon"
		class:chevron-up={isHovered}
	>
		<path d="m17 11-5-5-5 5" />
		<path d="m17 18-5-5-5 5" />
	</svg>
</div>

<style>
	.chevrons-up-icon {
		overflow: visible;
		transition: all 0.2s ease-in;
	}

	.chevron-up {
		transform: translateY(-3px);
	}
</style>

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

<div class={classes} aria-label="chevrons-left" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-left-icon"
		class:chevron-left={isHovered}
	>
		<path d="m11 17-5-5 5-5" />
		<path d="m18 17-5-5 5-5" />
	</svg>
</div>

<style>
	.chevrons-left-icon {
		overflow: visible;
		transition: all 0.2s ease-in;
	}

	.chevron-left {
		transform: translateX(-3px);
	}
</style>

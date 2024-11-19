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
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="ship-wheel"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
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
		class="ship-wheel-icon"
		class:animate={isHovered}
	>
		<circle cx="12" cy="12" r="8" /><path d="M12 2v7.5" /><path d="m19 5-5.23 5.23" /><path
			d="M22 12h-7.5"
		/><path d="m19 19-5.23-5.23" /><path d="M12 14.5V22" /><path d="M10.23 13.77 5 19" /><path
			d="M9.5 12H2"
		/><path d="M10.23 10.23 5 5" /><circle cx="12" cy="12" r="2.5" />
	</svg>
</div>

<style>
	.ship-wheel-icon {
		transition: transform 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	.ship-wheel-icon.animate {
		transform: rotate(180deg);
	}
</style>

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
	aria-label="align-vertical"
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
		class="align-vertical-icon"
		class:animate={isHovered}
	>
		<rect class="rectangle" width={10} height={6} x={7} y={9} rx={2} />
		<path class="top-line" d="M22 4H2" />
		<path class="bottom-line" d="M22 20H2" />
	</svg>
</div>

<style>
	.align-vertical-icon {
		overflow: visible;
	}

	.rectangle,
	.top-line,
	.bottom-line {
		transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
		transform-origin: center;
	}

	.align-vertical-icon.animate .rectangle {
		transform: scaleY(0.8);
	}

	.align-vertical-icon.animate .top-line {
		transform: translateY(2px) scaleX(0.9);
	}

	.align-vertical-icon.animate .bottom-line {
		transform: translateY(-2px) scaleX(0.9);
	}
</style>

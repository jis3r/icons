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
	aria-label="align-horizontal"
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
		class="align-horizontal-icon"
		class:animate={isHovered}
	>
		<rect class="rectangle" width={6} height={10} x={9} y={7} rx={2} />
		<path class="left-line" d="M4 22V2" />
		<path class="right-line" d="M20 22V2" />
	</svg>
</div>

<style>
	.align-horizontal-icon {
		overflow: visible;
	}

	.rectangle,
	.left-line,
	.right-line {
		transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
		transform-origin: center;
	}

	.align-horizontal-icon.animate .rectangle {
		transform: scaleX(0.85);
	}

	.align-horizontal-icon.animate .left-line {
		transform: translateX(2px) scaleY(0.9);
	}

	.align-horizontal-icon.animate .right-line {
		transform: translateX(-2px) scaleY(0.9);
	}
</style>

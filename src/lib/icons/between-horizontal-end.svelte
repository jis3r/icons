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
	aria-label="between-horizontal-end"
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
	>
		<rect width="13" height="7" x="3" y="3" rx="1" class:animate={isHovered} class="rect-top" />
		<path d="m22 15-3-3 3-3" class:animate={isHovered} class="arrow" />
		<rect width="13" height="7" x="3" y="14" rx="1" class:animate={isHovered} class="rect-bottom" />
	</svg>
</div>

<style>
	.rect-top {
		transition: all 0.15s ease-in;
	}

	.rect-top.animate {
		transform: translateY(-1px);
	}

	.rect-bottom {
		transition: all 0.15s ease-in;
	}

	.rect-bottom.animate {
		transform: translateY(1px);
	}

	.arrow {
		transition: all 0.15s ease-in;
	}

	.arrow.animate {
		transform: translateX(-2px);
	}
</style>

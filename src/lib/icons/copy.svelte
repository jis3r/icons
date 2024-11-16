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
	aria-label="copy"
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
		<rect
			width="14"
			height="14"
			x="8"
			y="8"
			rx="2"
			ry="2"
			class="copy-rect"
			class:animate={isHovered}
		/>
		<path
			d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
			class="copy-path"
			class:animate={isHovered}
		/>
	</svg>
</div>

<style>
	.copy-rect,
	.copy-path {
		transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.copy-rect.animate {
		transform: translate(-3px, -3px);
	}

	.copy-path.animate {
		transform: translate(3px, 3px);
	}

	svg {
		overflow: visible;
	}
</style>

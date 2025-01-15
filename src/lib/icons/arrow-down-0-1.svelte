<script>
	let {
		color = 'currentColor',
		size = 24,
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
	aria-label="arrow-down-0-1"
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
		<path d="m3 16 4 4 4-4" />
		<path d="M7 20V4" />
		<rect
			class="swap-group-up"
			class:animate={isHovered}
			x="15"
			y="4"
			width="4"
			height="6"
			ry="2"
		/>
		<g class="swap-group-down" class:animate={isHovered}>
			<path d="M17 20v-6h-2" />
			<path d="M15 20h4" />
		</g>
	</svg>
</div>

<style>
	.swap-group-up,
	.swap-group-down {
		transform: translateY(0);
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.swap-group-up.animate {
		transform: translateY(10px);
	}

	.swap-group-down.animate {
		transform: translateY(-10px);
	}
</style>

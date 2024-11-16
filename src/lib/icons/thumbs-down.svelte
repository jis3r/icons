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
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	aria-label="thumbs-down"
	role="img"
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
		class:animate={isHovered}
	>
		<path d="M17 14V2" />
		<path
			d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
		/>
	</svg>
</div>

<style>
	.animate {
		transform: translate(-1px, 2px) rotate(-12deg);
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	svg {
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
</style>

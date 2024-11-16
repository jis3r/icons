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
	aria-label="logout"
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
	>
		<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
		<polyline points="16 17 21 12 16 7" class:animate={isHovered} />
		<line x1="21" x2="9" y1="12" y2="12" class:animate={isHovered} />
	</svg>
</div>

<style>
	.animate {
		animation: bounce 0.4s forwards;
	}

	@keyframes bounce {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(-3px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>

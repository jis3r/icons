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
	aria-label="move-diagonal"
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
		class:animate={isHovered}
	>
		<path d="M11 19H5v-6" />
		<path d="M13 5h6v6" />
		<path d="M19 5 5 19" />
	</svg>
</div>

<style>
	path {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.animate {
		animation: moveDiagonal 1s;
	}

	@keyframes moveDiagonal {
		0%,
		45%,
		55%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(3px, -3px);
		}
		75% {
			transform: translate(-3px, 3px);
		}
	}
</style>

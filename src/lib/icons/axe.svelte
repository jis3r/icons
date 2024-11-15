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
	aria-label="axe"
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
		class="axe-icon"
		class:animate={isHovered}
	>
		<path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
		<path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" />
	</svg>
</div>

<style>
	.axe-icon {
		transform-origin: bottom left;
		transition: transform 0.3s ease-;
	}

	.axe-icon.animate {
		animation: swing 1s ease;
	}

	@keyframes swing {
		0% {
			transform: rotate(0deg);
		}
		60% {
			transform: rotate(-20deg);
		}
		80% {
			transform: rotate(15deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

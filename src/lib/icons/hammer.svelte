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
	aria-label="hammer"
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
		class="hammer-icon"
		class:animate={isHovered}
	>
		<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
		<path d="m18 15 4-4" />
		<path
			d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
		/>
	</svg>
</div>

<style>
	.hammer-icon {
		transform-origin: bottom left;
		transition: transform 0.3s ease;
	}

	.hammer-icon.animate {
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

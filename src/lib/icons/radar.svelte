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
	aria-label="radar"
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
		<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
		<path d="M4 6h.01" />
		<path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
		<path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
		<path d="M12 18h.01" />
		<path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
		<circle cx="12" cy="12" r="2" />
		<path d="m13.41 10.59 5.66-5.66" class="radar-icon" class:animate={isHovered} />
	</svg>
</div>

<style>
	.radar-icon {
		transform-origin: center center;
		transition: transform 1s ease-in-out;
	}

	.radar-icon.animate {
		animation: rotate-path 1.5s infinite linear;
	}

	@keyframes rotate-path {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>

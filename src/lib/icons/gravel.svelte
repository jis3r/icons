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
	aria-label="gavel"
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
		class="gavel-icon"
		class:animate={isHovered}
	>
		<path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
		<path d="m16 16 6-6" />
		<path d="m8 8 6-6" />
		<path d="m9 7 8 8" />
		<path d="m21 11-8-8" />
	</svg>
</div>

<style>
	.gavel-icon {
		transform-origin: bottom left;
		transition: transform 0.3s ease;
	}

	.gavel-icon.animate {
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

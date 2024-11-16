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
	aria-label="drum"
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
		class="drum-icon"
		class:animate={isHovered}
	>
		<path d="m2 2 8 8" class="drumstick-1" />
		<path d="m22 2-8 8" class="drumstick-2" />
		<ellipse cx="12" cy="9" rx="10" ry="5" />
		<path d="M7 13.4v7.9" />
		<path d="M12 14v8" />
		<path d="M17 13.4v7.9" />
		<path d="M2 9v8a10 5 0 0 0 20 0V9" />
	</svg>
</div>

<style>
	.drum-icon {
		overflow: visible;
	}

	.drum-icon path {
		transition: transform 0.3s ease;
	}

	.drum-icon.animate .drumstick-1 {
		animation: drumstick1Animation 0.2s ease-in-out infinite alternate;
	}

	.drum-icon.animate .drumstick-2 {
		animation: drumstick2Animation 0.2s ease-in-out infinite alternate;
	}

	@keyframes drumstick1Animation {
		0%,
		100% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(-10deg);
		}
	}

	@keyframes drumstick2Animation {
		0%,
		100% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(10deg);
		}
	}
</style>

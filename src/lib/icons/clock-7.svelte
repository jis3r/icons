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
	aria-label="clock-7"
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
		<circle cx="12" cy="12" r="10" />
		<line x1="12" y1="6" x2="12" y2="12" class="minute-hand" class:animate={isHovered} />
		<line x1="12" y1="12" x2="9.5" y2="16" class="hour-hand" class:animate={isHovered} />
	</svg>
</div>

<style>
	.minute-hand,
	.hour-hand {
		transform-origin: center;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.hour-hand {
		transition-duration: 0.5s;
		transition-timing-function: ease-in-out;
	}

	.minute-hand.animate {
		transform: rotate(360deg);
	}

	.hour-hand.animate {
		transform: rotate(30deg);
	}
</style>

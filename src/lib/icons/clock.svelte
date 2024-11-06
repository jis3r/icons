<script>
	let { color = 'currentColor', isHovered, classes = '' } = $props();

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="clock"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="28"
		height="28"
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<circle cx="12" cy="12" r="10" />
		<line x1="12" y1="12" x2="12" y2="6" class="hour-hand" class:animate={isHovered} />
		<line x1="12" y1="12" x2="16" y2="12" class="minute-hand" class:animate={isHovered} />
	</svg>
</div>

<style>
	.hour-hand,
	.minute-hand {
		transform-origin: center;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.minute-hand {
		transition-duration: 0.5s;
		transition-timing-function: ease-in-out;
	}

	.hour-hand.animate {
		transform: rotate(360deg);
	}

	.minute-hand.animate {
		transform: rotate(45deg);
	}
</style>

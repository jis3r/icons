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

		setTimeout(() => {
			isHovered = false;
		}, 1500);
	}
</script>

<div class={classes} aria-label="battery" role="img" onmouseenter={handleMouseEnter}>
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
		class="battery-icon"
		class:animate={isHovered}
	>
		<rect width="16" height="10" x="2" y="7" rx="2" ry="2" class="battery" />
		<line x1="22" x2="22" y1="11" y2="13" class="battery" />
	</svg>
</div>

<style>
	.battery-icon {
		overflow: visible;
	}

	.battery-icon.animate .battery {
		opacity: 0;
		animation: blink 0.5s 3;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>

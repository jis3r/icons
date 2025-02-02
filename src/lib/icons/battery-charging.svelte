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

<div class={classes} aria-label="battery-charging" role="img" onmouseenter={handleMouseEnter}>
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
		class="battery-charging-icon"
		class:animate={isHovered}
	>
		<path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
		<path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
		<path d="m11 7-3 5h4l-3 5" class="battery-charging" />
		<line x1="22" x2="22" y1="11" y2="13" />
	</svg>
</div>

<style>
	.battery-icon {
		overflow: visible;
	}

	.battery-charging-icon.animate .battery-charging {
		opacity: 0;
		animation: blink 0.5s 3;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.1;
		}
	}
</style>

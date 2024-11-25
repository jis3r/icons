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
		}, 400);
	}
</script>

<div class={classes} aria-label="route-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="route-off"
		class:animate={isHovered}
	>
		<circle cx="6" cy="19" r="3" />
		<path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
		<path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
		<path class="line" d="m2 2 20 20" />
		<path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
		<path d="M15 5h-4.3" />
		<circle cx="18" cy="5" r="3" />
	</svg>
</div>

<style>
	.route-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.route-off.animate .line {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.1s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 29;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 29;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

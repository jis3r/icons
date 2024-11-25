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

<div class={classes} aria-label="wifi-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="wifi-off"
		class:animate={isHovered}
	>
		<path d="M12 20h.01" />
		<path d="M8.5 16.429a5 5 0 0 1 7 0" />
		<path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
		<path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
		<path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
		<path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
		<path class="line" d="m2 2 20 20" />
	</svg>
</div>

<style>
	.wifi-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.wifi-off.animate .line {
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

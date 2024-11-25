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

<div class={classes} aria-label="alarm-clock-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="alarm-clock-off"
		class:animate={isHovered}
	>
		<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
		<path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
		<path d="m22 6-3-3" />
		<path d="M6.26 18.67 4 21" />
		<path d="m2 2 20 20" class="line" />
		<path d="M4 4 2 6" />
	</svg>
</div>

<style>
	.alarm-clock-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.alarm-clock-off.animate .line {
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

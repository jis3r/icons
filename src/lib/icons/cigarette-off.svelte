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

<div class={classes} aria-label="cigarette-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="cigarette-off"
		class:animate={isHovered}
	>
		<path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
		<path d="M18 8c0-2.5-2-2.5-2-5" />
		<path class="line" d="m2 2 20 20" />
		<path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
		<path d="M22 8c0-2.5-2-2.5-2-5" />
		<path d="M7 12v4" />
	</svg>
</div>

<style>
	.cigarette-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.cigarette-off.animate .line {
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

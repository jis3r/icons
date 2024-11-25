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

<div class={classes} aria-label="keyboard-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="keyboard-off"
		class:animate={isHovered}
	>
		<path d="M 20 4 A2 2 0 0 1 22 6" />
		<path d="M 22 6 L 22 16.41" />
		<path d="M 7 16 L 16 16" />
		<path d="M 9.69 4 L 20 4" />
		<path d="M14 8h.01" />
		<path d="M18 8h.01" />
		<path class="line" d="m2 2 20 20" />
		<path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
		<path d="M6 8h.01" />
		<path d="M8 12h.01" />
	</svg>
</div>

<style>
	.keyboard-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.keyboard-off.animate .line {
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

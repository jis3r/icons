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

<div class={classes} aria-label="touchpad-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="touchpad-off"
		class:animate={isHovered}
	>
		<path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" />
		<path d="M2 14h12" />
		<path d="M22 14h-2" />
		<path d="M12 20v-6" />
		<path class="line" d="m2 2 20 20" />
		<path d="M22 16V6a2 2 0 0 0-2-2H10" />
	</svg>
</div>

<style>
	.touchpad-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.touchpad-off.animate .line {
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

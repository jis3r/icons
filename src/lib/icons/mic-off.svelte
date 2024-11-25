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

<div class={classes} aria-label="mic-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="mic-off"
		class:animate={isHovered}
	>
		<line x1="2" x2="22" y1="2" y2="22" class="line" />
		<path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
		<path d="M5 10v2a7 7 0 0 0 12 5" />
		<path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
		<path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
		<line x1="12" x2="12" y1="19" y2="22" />
	</svg>
</div>

<style>
	.mic-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.mic-off.animate .line {
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

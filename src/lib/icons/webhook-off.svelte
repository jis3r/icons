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

<div class={classes} aria-label="webhook-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="webhook-off"
		class:animate={isHovered}
	>
		<path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" />
		<path d="M9 3.4a4 4 0 0 1 6.52.66" />
		<path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" />
		<path d="M20.3 20.3a4 4 0 0 1-2.3.7" />
		<path d="M18.6 13a4 4 0 0 1 3.357 3.414" />
		<path d="m12 6 .6 1" />
		<path class="line" d="m2 2 20 20" />
	</svg>
</div>

<style>
	.webhook-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.webhook-off.animate .line {
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

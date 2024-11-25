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
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="cctv"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
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
		class="cctv-icon"
		class:animate={isHovered}
	>
		<g class="cctv-body">
			<path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
			<path
				d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"
			/>
			<path d="M7 9h.01" class="cctv-dot" />
		</g>
		<path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
		<path d="M2 21v-4" />
	</svg>
</div>

<style>
	.cctv-icon {
		overflow: visible;
	}

	.cctv-body {
		transform-origin: 9px 15px;
		transition: transform 2s ease-in-out;
	}

	.cctv-icon.animate .cctv-body {
		animation: cctvRotate 2s ease-in-out;
	}

	@keyframes cctvRotate {
		0%,
		100% {
			transform: rotate(0deg);
		}
		33% {
			transform: rotate(-15deg);
		}
		66% {
			transform: rotate(10deg);
		}
	}

	.cctv-dot {
		opacity: 1;
		transition: opacity 1s linear;
	}

	.cctv-icon.animate .cctv-dot {
		animation: dotBlink 1s linear infinite;
	}

	@keyframes dotBlink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>

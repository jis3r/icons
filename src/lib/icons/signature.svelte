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
		}, 700);
	}
</script>

<div class={classes} aria-label="signature" role="img" onmouseenter={handleMouseEnter}>
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
		class="signature-icon"
		class:animate={isHovered}
	>
		<path
			d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
			class="line"
		/>
		<path d="M3 21h18" />
	</svg>
</div>

<style>
	.signature-icon {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 53;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease-out,
			opacity 0.3s ease-out;
	}

	.signature-icon.animate .line {
		animation: lineAnimation 0.6s ease-in;
	}

	@keyframes lineAnimation {
		0% {
			stroke-dashoffset: 53;
		}
		15% {
			stroke-dashoffset: 53;
		}
		100% {
			stroke-dashoffset: 106;
		}
	}
</style>

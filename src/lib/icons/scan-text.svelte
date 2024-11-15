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

<div class={classes} aria-label="scan-text" role="img" onmouseenter={handleMouseEnter}>
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
		class="scan-text-icon"
		class:animate={isHovered}
	>
		<path d="M3 7V5a2 2 0 0 1 2-2h2" class="frame" />
		<path d="M17 3h2a2 2 0 0 1 2 2v2" class="frame" />
		<path d="M21 17v2a2 2 0 0 1-2 2h-2" class="frame" />
		<path d="M7 21H5a2 2 0 0 1-2-2v-2" class="frame" />
		<path d="M7 8h8" class="line line-0" />
		<path d="M7 12h10" class="line line-1" />
		<path d="M7 16h6" class="line line-2" />
	</svg>
</div>

<style>
	.scan-text-icon {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 12;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.scan-text-icon.animate .line {
		animation: lineAnimation 0.6s ease forwards;
	}

	.scan-text-icon.animate .line-0 {
		animation-delay: 0s;
	}

	.scan-text-icon.animate .line-1 {
		animation-delay: 0.1s;
	}

	.scan-text-icon.animate .line-2 {
		animation-delay: 0.2s;
	}

	@keyframes lineAnimation {
		0% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
		50% {
			stroke-dashoffset: 12;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

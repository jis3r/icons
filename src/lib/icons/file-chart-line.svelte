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

<div class={classes} aria-label="file-chart-line" role="img" onmouseenter={handleMouseEnter}>
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
		class="file-chart-line-icon"
		class:animate={isHovered}
	>
		<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" class="frame" />
		<path d="M14 2v4a2 2 0 0 0 2 2h4" class="top-line" />
		<path d="M8 17 10.5 14.5 12.5 16.5 16 13" class="line" />
	</svg>
</div>

<style>
	.file-chart-line-icon {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 12;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.file-chart-line-icon.animate .line {
		animation: lineAnimation 0.6s ease forwards;
	}

	@keyframes lineAnimation {
		0% {
			stroke-dashoffset: 12;
			opacity: 0;
		}
		15% {
			stroke-dashoffset: 12;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

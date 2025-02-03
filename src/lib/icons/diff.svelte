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
		}, 750);
	}
</script>

<div class={classes} aria-label="diff" role="img" onmouseenter={handleMouseEnter}>
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
		class="diff"
		class:animate={isHovered}
	>
		<path d="M12 3v14" class="vertical" />
		<path d="M5 10h14" class="horizontal-top" />
		<path d="M5 21h14" class="horizontal-bottom" />
	</svg>
</div>

<style>
	.diff {
		overflow: visible;
	}

	.vertical,
	.horizontal-top,
	.horizontal-bottom {
		stroke-dasharray: 14;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.diff.animate .vertical {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	.diff.animate .horizontal-top {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.diff.animate .horizontal-bottom {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.5s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 14;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 14;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

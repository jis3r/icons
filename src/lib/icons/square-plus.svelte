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
		}, 500);
	}
</script>

<div class={classes} aria-label="square-plus" role="img" onmouseenter={handleMouseEnter}>
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
		class="square-plus"
		class:animate={isHovered}
	>
		<rect width="18" height="18" x="3" y="3" rx="2" />
		<path d="M8 12h8" class="horizontal" />
		<path d="M12 8v8" class="vertical" />
	</svg>
</div>

<style>
	.square-plus {
		overflow: visible;
	}

	.horizontal,
	.vertical {
		stroke-dasharray: 8;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.square-plus.animate .horizontal {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.square-plus.animate .vertical {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 8;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 8;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

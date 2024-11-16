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

<div class={classes} aria-label="check" role="img" onmouseenter={handleMouseEnter}>
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
		class="check-icon"
		class:animate={isHovered}
	>
		<path d="M4 12l5 5L20 6" class="check-path" />
	</svg>
</div>

<style>
	.check-icon {
		overflow: visible;
	}

	.check-path {
		stroke-dasharray: 24;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.125s ease-out,
			opacity 0.125s ease-out;
	}

	.check-icon.animate .check-path {
		animation: checkAnimation 0.5s ease-out backwards;
	}

	@keyframes checkAnimation {
		0% {
			stroke-dashoffset: 24;
			opacity: 0;
		}
		33% {
			stroke-dashoffset: 24;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

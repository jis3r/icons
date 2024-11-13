<script>
	let { color = 'currentColor', isHovered = false, classes = '' } = $props();

	function handleMouseEnter() {
		isHovered = true;
		setTimeout(() => {
			isHovered = false;
		}, 500);
	}
</script>

<div class={classes} aria-label="check-check" role="img" onmouseenter={handleMouseEnter}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="28"
		height="28"
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="check-check-icon"
		class:animate={isHovered}
	>
		<path d="M18 6 7 17l-5-5" class="check-path" />
		<path d="m22 10-7.5 7.5L13 16" class="check-path" />
	</svg>
</div>

<style>
	.check-check-icon {
		overflow: visible;
	}
	.check-path {
		stroke-dasharray: 24;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.125s ease-out,
			opacity 0.125s ease-out;
	}
	.check-check-icon.animate .check-path {
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

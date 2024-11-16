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

<div class={classes} aria-label="circle-check-big" role="img" onmouseenter={handleMouseEnter}>
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
		class="circle-check-big-icon"
		class:animate={isHovered}
	>
		<path d="M21.801 10A10 10 0 1 1 17 3.335" />
		<path d="m9 11 3 3L22 4" class="check-path" />
	</svg>
</div>

<style>
	.circle-check-big-icon {
		overflow: visible;
	}
	.check-path {
		stroke-dasharray: 17;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.125s ease-out,
			opacity 0.125s ease-out;
	}
	.circle-check-big-icon.animate .check-path {
		animation: checkAnimation 0.5s ease-out backwards;
	}
	@keyframes checkAnimation {
		0% {
			stroke-dashoffset: 17;
			opacity: 0;
		}
		33% {
			stroke-dashoffset: 17;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

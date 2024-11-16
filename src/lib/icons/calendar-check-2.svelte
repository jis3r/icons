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

<div class={classes} aria-label="calendar-check-2" role="img" onmouseenter={handleMouseEnter}>
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
		class="calendar-check-2-icon"
		class:animate={isHovered}
	>
		<path d="M8 2v4" />
		<path d="M16 2v4" />
		<path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
		<path d="M3 10h18" />
		<path d="m16 20 2 2 4-4" class="check-path" />
	</svg>
</div>

<style>
	.calendar-check-2-icon {
		overflow: visible;
	}
	.check-path {
		stroke-dasharray: 9;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.125s ease-out,
			opacity 0.125s ease-out;
	}
	.calendar-check-2-icon.animate .check-path {
		animation: checkAnimation 0.5s ease-out backwards;
	}
	@keyframes checkAnimation {
		0% {
			stroke-dashoffset: 9;
			opacity: 0;
		}
		33% {
			stroke-dashoffset: 9;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

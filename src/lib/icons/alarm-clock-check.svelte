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

<div class={classes} aria-label="alarm-clock-check" role="img" onmouseenter={handleMouseEnter}>
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
		class="alarm-clock-check-icon"
		class:animate={isHovered}
	>
		<circle cx="12" cy="13" r="8" />
		<path d="M5 3 2 6" />
		<path d="m22 6-3-3" />
		<path d="M6.38 18.7 4 21" />
		<path d="M17.64 18.67 20 21" />
		<path d="m9 13 2 2 4-4" class="check-path" />
	</svg>
</div>

<style>
	.alarm-clock-check-icon {
		overflow: visible;
	}
	.check-path {
		stroke-dasharray: 9;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.125s ease-out,
			opacity 0.125s ease-out;
	}
	.alarm-clock-check-icon.animate .check-path {
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

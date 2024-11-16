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

<div class={classes} aria-label="list-check" role="img" onmouseenter={handleMouseEnter}>
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
		class="list-check-icon"
		class:animate={isHovered}
	>
		<path d="M11 18H3" />
		<path d="m15 18 2 2 4-4" class="check-path" />
		<path d="M16 12H3" />
		<path d="M16 6H3" />
	</svg>
</div>

<style>
	.list-check-icon {
		overflow: visible;
	}

	.check-path {
		stroke-dasharray: 9;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.125s ease-out,
			opacity 0.125s ease-out;
	}

	.list-check-icon.animate .check-path {
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

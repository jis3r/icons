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
		}, 300);
	}
</script>

<div class={classes} aria-label="circle-chevron-left" role="img" onmouseenter={handleMouseEnter}>
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
		class="circle-chevron-left"
		class:animate={isHovered}
	>
		<circle cx="12" cy="12" r="10" />
		<path d="m14 16-4-4 4-4" class="chevron" />
	</svg>
</div>

<style>
	.circle-chevron-left {
		overflow: visible;
	}

	.chevron {
		transition: transform 0.3s ease-in;
	}

	.circle-chevron-left.animate .chevron {
		animation: bounceChevron 0.3s ease-in;
	}

	@keyframes bounceChevron {
		0%,
		100% {
			transform: translateX(0);
		}
		40% {
			transform: translateX(-2px);
		}
	}
</style>

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

<div class={classes} aria-label="wifi-high" role="img" onmouseenter={handleMouseEnter}>
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
		class="wifi-icon"
		class:animate={isHovered}
	>
		<path d="M12 20h.01" />
		<path d="M8.5 16.429a5 5 0 0 1 7 0" class="wifi-level wifi-line-1" />
		<path d="M5 12.859a10 10 0 0 1 14 0" class="wifi-level wifi-line-2" />
	</svg>
</div>

<style>
	.wifi-icon {
		overflow: visible;
	}

	.wifi-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.wifi-icon.animate .wifi-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.wifi-icon.animate .wifi-line-1 {
		opacity: 0;
		animation-delay: 0.25s;
	}

	.wifi-icon.animate .wifi-line-2 {
		opacity: 0;
		animation-delay: 0.35s;
	}

	@keyframes fadeInSequence {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

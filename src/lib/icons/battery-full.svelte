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
		}, 1500);
	}
</script>

<div class={classes} aria-label="battery-full" role="img" onmouseenter={handleMouseEnter}>
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
		class="battery-icon"
		class:animate={isHovered}
	>
		<rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
		<line x1="22" x2="22" y1="11" y2="13" />
		<line x1="6" x2="6" y1="11" y2="13" class="battery-bar battery-bar-1" />
		<line x1="10" x2="10" y1="11" y2="13" class="battery-bar battery-bar-2" />
		<line x1="14" x2="14" y1="11" y2="13" class="battery-bar battery-bar-3" />
	</svg>
</div>

<style>
	.battery-icon {
		overflow: visible;
	}

	.battery-bar {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	.battery-icon.animate .battery-bar {
		animation: fadeInSequence 0.3s ease forwards;
	}

	.battery-icon.animate .battery-bar-1 {
		opacity: 0;
		animation-delay: 0.4s;
	}

	.battery-icon.animate .battery-bar-2 {
		opacity: 0;
		animation-delay: 0.8s;
	}

	.battery-icon.animate .battery-bar-3 {
		opacity: 0;
		animation-delay: 1.2s;
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

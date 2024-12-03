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
		}, 3300);
	}
</script>

<div class={classes} aria-label="tornado" role="img" onmouseenter={handleMouseEnter}>
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
		class:animate={isHovered}
	>
		<path d="M21 4H3" class="line line-1" />
		<path d="M18 8H6" class="line line-2" />
		<path d="M19 12H9" class="line line-3" />
		<path d="M16 16h-6" class="line line-4" />
		<path d="M11 20H9" class="line line-5" />
	</svg>
</div>

<style>
	.line {
		transition: transform 0.3s ease;
		transform-origin: center;
	}
	.animate .line-2 {
		animation: swirlLeftRight 3s ease-in-out;
	}
	.animate .line-3 {
		animation: swirlLeftRight 3s ease-in-out;
		animation-delay: 0.1s;
	}
	.animate .line-4 {
		animation: swirlLeftRight 3s ease-in-out;
		animation-delay: 0.2s;
	}
	.animate .line-5 {
		animation: swirlLeftRight 3s ease-in-out;
		animation-delay: 0.3s;
	}

	@keyframes swirlLeftRight {
		0%,
		100% {
			transform: translateX(0);
		}
		10%,
		30%,
		50%,
		70%,
		90% {
			transform: translateX(-2px);
		}
		20%,
		40%,
		60%,
		80% {
			transform: translateX(2px);
		}
	}
</style>

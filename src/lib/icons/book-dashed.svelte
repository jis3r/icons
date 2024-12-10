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
		}, 600);
	}
</script>

<div class={classes} aria-label="book-dashed" role="img" onmouseenter={handleMouseEnter}>
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
		class="book-dashed-icon"
		class:animate={isHovered}
	>
		<path d="M12 17h1.5" />
		<path d="M12 22h1.5" />
		<path d="M12 2h1.5" />
		<path d="M17.5 22H19a1 1 0 0 0 1-1" />
		<path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
		<path d="M20 14v3h-2.5" />
		<path d="M20 8.5V10" />
		<path d="M4 10V8.5" />
		<path d="M4 19.5V14" />
		<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
		<path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
	</svg>
</div>

<style>
	.book-dashed-icon {
		overflow: visible;
	}

	.book-dashed-icon.animate {
		animation: bookAnimation 0.6s ease-in-out;
	}

	@keyframes bookAnimation {
		0% {
			transform: scale(1) rotate(0deg) translateY(0);
		}
		20% {
			transform: scale(1.04) rotate(-8deg) translateY(-2px);
		}
		50% {
			transform: scale(1.04) rotate(8deg) translateY(-2px);
		}
		80% {
			transform: scale(1.04) rotate(-8deg) translateY(-2px);
		}
		100% {
			transform: scale(1) rotate(0deg) translateY(0);
		}
	}
</style>

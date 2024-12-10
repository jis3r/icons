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

<div class={classes} aria-label="book-marked" role="img" onmouseenter={handleMouseEnter}>
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
		class="book-marked-icon"
		class:animate={isHovered}
	>
		<path d="M10 2v8l3-3 3 3V2" />
		<path
			d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
		/>
	</svg>
</div>

<style>
	.book-marked-icon {
		overflow: visible;
	}

	.book-marked-icon.animate {
		animation: book-markedAnimation 0.6s ease-in-out;
	}

	@keyframes book-markedAnimation {
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

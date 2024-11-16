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
		}, 800);
	}
</script>

<div class={classes} aria-label="cart" role="img" onmouseenter={handleMouseEnter}>
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
		class="cart-icon"
		class:animate={isHovered}
	>
		<path
			d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
		/>
	</svg>
</div>

<style>
	.cart-icon {
		transition: transform 0.2s ease-in-out;
		transform-origin: center;
	}

	.cart-icon.animate {
		animation: cartBounce 0.8s ease-in-out;
	}

	@keyframes cartBounce {
		0%,
		100% {
			transform: scale(1) translateY(0);
		}
		25% {
			transform: scale(1.1) translateY(-5px);
		}
		50% {
			transform: scale(1) translateY(0);
		}
		75% {
			transform: scale(1.1) translateY(-5px);
		}
	}
</style>

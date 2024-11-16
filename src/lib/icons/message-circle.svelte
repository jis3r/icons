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
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="message-circle"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
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
		class:animate-icon={isHovered}
	>
		<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
	</svg>
</div>

<style>
	.animate-icon {
		animation: primaryAnimation 0.5s ease-in-out;
	}

	@keyframes primaryAnimation {
		0% {
			transform: scale(1) rotate(0deg);
		}
		20% {
			transform: scale(1.05) rotate(-7deg);
		}
		40% {
			transform: scale(1.05) rotate(7deg);
		}
		100% {
			transform: scale(1) rotate(0deg);
		}
	}
</style>

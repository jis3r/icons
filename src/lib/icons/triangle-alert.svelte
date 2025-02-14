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
	aria-label="triangle-alert"
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
		<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
		<path d="M12 9v4" />
		<path d="M12 17h.01" />
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
			transform: scale(1.1) rotate(-3deg);
		}
		40% {
			transform: scale(1.1) rotate(3deg);
		}
		60% {
			transform: scale(1.1) rotate(-2deg);
		}
		100% {
			transform: scale(1) rotate(0deg);
		}
	}
</style>

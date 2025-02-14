<script>
	let {
		color = 'currentColor',
		size = 24,
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
	aria-label="octagon-alert"
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
		<path d="M12 16h.01" />
		<path d="M12 8v4" />
		<path
			d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
		/>
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

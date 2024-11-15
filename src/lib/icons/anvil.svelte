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
		}, 499);
	}
</script>

<div
	class={'overflow-hidden ' + classes}
	aria-label="anvil"
	role="img"
	onmouseenter={handleMouseEnter}
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
		class="anvil-icon overflow-hidden"
		class:animate={isHovered}
	>
		<path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" /><path
			d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"
		/><path d="M9 12v5" /><path d="M15 12v5" /><path
			d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"
		/>
	</svg>
</div>

<style>
	.anvil-icon {
		transform-origin: top center;
		animation: none;
	}

	.anvil-icon.animate {
		animation: fallFromTop 0.1s;
		transform: translateY(-10000000px);
		animation-delay: 0.4s;
	}

	@keyframes fallFromTop {
		0% {
			transform: translateY(-50px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>

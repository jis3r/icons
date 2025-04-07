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
	aria-label="circle-arrow-out-up-left"
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
	>
		<g class="arrow" class:animate={isHovered}>
			<path d="M2 8V2h6" />
			<path d="m2 2 10 10" />
		</g>
		<path d="M12 2A10 10 0 1 1 2 12" />
	</svg>
</div>

<style>
	.arrow {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.arrow.animate {
		animation: moveUpLeft 0.5s;
	}
	@keyframes moveUpLeft {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(2px, 2px);
		}
	}
</style>

<script>
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		isHovered = false,
		class: className = ''
	} = $props();

	function handleMouseEnter() {
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 500);
	}
</script>

<div
	class={className}
	aria-label="square-arrow-out-up-right"
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
	>
		<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
		<g class="arrow" class:animate={isHovered}>
			<path d="m21 3-9 9" />
			<path d="M15 3h6v6" />
		</g>
	</svg>
</div>

<style>
	.arrow path {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.animate {
		animation: moveUpRight 0.5s;
	}
	@keyframes moveUpRight {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-2px, 2px);
		}
	}
</style>

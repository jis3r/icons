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
	aria-label="circle-arrow-out-up-right"
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
		<path d="M22 12A10 10 0 1 1 12 2" />
		<g class="arrow" class:animate={isHovered}>
			<path d="M22 2 12 12" />
			<path d="M16 2h6v6" />
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

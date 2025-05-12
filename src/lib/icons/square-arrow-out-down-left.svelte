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
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={className}
	aria-label="square-arrow-out-down-left"
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
		<path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" />
		<g class="arrow" class:animate={isHovered}>
			<path d="m3 21 9-9" />
			<path d="M9 21H3v-6" />
		</g>
	</svg>
</div>

<style>
	.arrow {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.arrow.animate {
		animation: moveDownLeft 0.5s;
	}
	@keyframes moveDownLeft {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(2px, -2px);
		}
	}
</style>

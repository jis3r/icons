<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [color]
	 * @property {number} [size]
	 * @property {number} [strokeWidth]
	 * @property {boolean} [isHovered]
	 * @property {string} [class]
	 */

	/** @type {Props} */
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
	aria-label="circle-arrow-out-down-right"
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
		<path d="M12 22a10 10 0 1 1 10-10" />
		<g class="arrow" class:animate={isHovered}>
			<path d="M22 22 12 12" />
			<path d="M22 16v6h-6" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.arrow path {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.animate {
		animation: moveDownRight 0.5s;
	}
	@keyframes moveDownRight {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-2px, -2px);
		}
	}
</style>

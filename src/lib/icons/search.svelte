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
		if (!isHovered) {
			isHovered = true;
			setTimeout(() => {
				isHovered = false;
			}, 1000);
		}
	}
</script>

<div class={className} onmouseenter={handleMouseEnter} aria-label="search" role="img">
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
		class:animate={isHovered}
	>
		<circle cx="11" cy="11" r="8" />
		<path d="m21 21-4.3-4.3" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	svg {
		transition:
			transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			transform 1s ease-in-out;
	}

	.animate {
		animation: search-bounce 1s ease-in-out;
	}

	@keyframes search-bounce {
		0%,
		100% {
			transform: translateX(0) translateY(0);
		}
		25% {
			transform: translateX(0) translateY(-4px);
		}
		50% {
			transform: translateX(-3px) translateY(0);
		}
	}
</style>

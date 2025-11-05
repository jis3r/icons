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
		}, 400);
	}
</script>

<div class={className} onmouseenter={handleMouseEnter} aria-label="log-out" role="img">
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
		<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
		<polyline points="16 17 21 12 16 7" class:animate={isHovered} />
		<line x1="21" x2="9" y1="12" y2="12" class:animate={isHovered} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.animate {
		animation: bounce 0.4s forwards;
	}

	@keyframes bounce {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(-3px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>

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
		}, 1000);
	}
</script>

<div class={className} aria-label="mouse-pointer-2" role="img" onmouseenter={handleMouseEnter}>
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
		class="mouse-pointer-icon"
		class:animate={isHovered}
	>
		<path
			d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.mouse-pointer-icon {
		overflow: visible;
	}

	.mouse-pointer-icon.animate {
		animation: mouseMove 1s ease;
	}

	@keyframes mouseMove {
		0%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(0, -4px);
		}
		75% {
			transform: translate(-3px, 0);
		}
	}
</style>

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
		}, 700);
	}
</script>

<div class={className} aria-label="sword" role="img" onmouseenter={handleMouseEnter}>
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
		class="sword-icon"
		class:animate={isHovered}
	>
		<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
		<line x1="13" y1="19" x2="19" y2="13" />
		<line x1="16" y1="16" x2="20" y2="20" />
		<line x1="19" y1="21" x2="21" y2="19" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.sword-icon {
		transform-origin: bottom right;
		transition: transform 0.3s ease;
	}

	.sword-icon.animate {
		animation: swing 1s ease;
	}

	@keyframes swing {
		0%,
		70% {
			transform: rotate(0deg);
		}
		30% {
			transform: rotate(25deg);
		}
		50% {
			transform: rotate(-5deg);
		}
	}
</style>

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

<div class={className} aria-label="arrow-left-right" role="img" onmouseenter={handleMouseEnter}>
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
		<path d="M8 3L4 7l4 4" class="left-arrow" class:animate={isHovered} />
		<path d="M4 7h16" class="left-arrow" class:animate={isHovered} />
		<path d="M16 21l4-4-4-4" class="right-arrow" class:animate={isHovered} />
		<path d="M20 17H4" class="right-arrow" class:animate={isHovered} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.left-arrow,
	.right-arrow {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.left-arrow.animate {
		animation: moveLeft 0.5s;
	}

	.right-arrow.animate {
		animation: moveRight 0.5s;
	}

	@keyframes moveLeft {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(-3px);
		}
	}

	@keyframes moveRight {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(3px);
		}
	}
</style>

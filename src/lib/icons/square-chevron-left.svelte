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
		}, 300);
	}
</script>

<div class={className} aria-label="square-chevron-left" role="img" onmouseenter={handleMouseEnter}>
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
		class="square-chevron-left"
		class:animate={isHovered}
	>
		<rect width="18" height="18" x="3" y="3" rx="2" />
		<path d="m14 16-4-4 4-4" class="chevron" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.square-chevron-left {
		overflow: visible;
	}

	.chevron {
		transition: transform 0.3s ease-in;
	}

	.square-chevron-left.animate .chevron {
		animation: bounceChevron 0.3s ease-in;
	}

	@keyframes bounceChevron {
		0%,
		100% {
			transform: translateX(0);
		}
		40% {
			transform: translateX(-2px);
		}
	}
</style>

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

<div class={className} aria-label="align-center" role="img" onmouseenter={handleMouseEnter}>
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
		<path d="M17 12H7" class:animate-path={isHovered} />
		<path d="M19 18H5" />
		<path d="M21 6H3" />
	</svg>
</div>

<style>
	.animate-path {
		animation: translateAnimation 1s linear;
	}

	@keyframes translateAnimation {
		0% {
			transform: translateX(0);
		}
		20% {
			transform: translateX(3px);
		}
		40% {
			transform: translateX(-3px);
		}
		60% {
			transform: translateX(2px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>

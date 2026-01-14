<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [color]
	 * @property {number} [size]
	 * @property {number} [strokeWidth]
	 * @property {boolean} [animate]
	 * @property {string} [class]
	 */

	/** @type {Props} */
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate = false,
		class: className = ''
	} = $props();

	function handleMouseEnter() {
		animate = true;
		setTimeout(() => (animate = false), 200);
	}
</script>

<div class={className} aria-label="arrow-big-down-dash" role="img" onmouseenter={handleMouseEnter}>
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
		<path class:animate-dash={animate} d="M15 5H9" />
		<path class:animate-arrow={animate} d="M15 9v3h4l-7 7-7-7h4V9z" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	svg path {
		transition: transform 0.2s ease-out;
	}
	.animate-arrow {
		transform: translateY(3px);
	}
	.animate-dash {
		transform: translateY(1px);
	}
</style>

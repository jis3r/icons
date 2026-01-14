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

		setTimeout(() => {
			animate = false;
		}, 200);
	}
</script>

<div class={className} aria-label="chevrons-down-up" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-down-up-icon"
	>
		<path d="m7 20 5-5 5 5" class:chevron-up={animate} />
		<path d="m7 4 5 5 5-5" class:chevron-down={animate} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.chevrons-down-up-icon {
		overflow: visible;
	}

	.chevrons-down-up-icon path {
		transition: all 0.2s ease-in;
	}

	.chevron-up {
		transform: translateY(-3px);
	}

	.chevron-down {
		transform: translateY(3px);
	}
</style>

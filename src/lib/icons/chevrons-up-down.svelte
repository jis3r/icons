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

<div class={className} aria-label="chevrons-up-down" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-up-down-icon"
	>
		<path d="m7 15 5 5 5-5" class:chevron-down={animate} />
		<path d="m7 9 5-5 5 5" class:chevron-up={animate} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.chevrons-up-down-icon {
		overflow: visible;
	}

	.chevrons-up-down-icon path {
		transition: all 0.2s ease-in;
	}

	.chevron-up {
		transform: translateY(-3px);
	}

	.chevron-down {
		transform: translateY(3px);
	}
</style>

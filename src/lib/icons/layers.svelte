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
		if (animate) return;
		animate = true;
		setTimeout(() => {
			animate = false;
		}, 300);
	}
</script>

<div class={className} aria-label="layers" role="img" onmouseenter={handleMouseEnter}>
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
		class="layers-icon"
		class:animate
	>
		<path
			d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
		/>
		<path
			d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
			class="layer layer-bottom"
			class:animate
		/>
		<path
			d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
			class="layer layer-middle"
			class:animate
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.layers-icon {
		overflow: visible;
	}

	.layer {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.layer-bottom.animate {
		transform: translateY(-9px);
	}

	.layer-middle.animate {
		transform: translateY(-5px);
	}
</style>

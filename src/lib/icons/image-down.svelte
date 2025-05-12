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
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={className}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	aria-label="image-down"
	role="img"
>
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
		class="image-down"
	>
		<path
			d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
		/>
		<circle cx="9" cy="9" r="2" />
		<g class:animate={isHovered}>
			<path d="m14 19 3 3v-5.5" />
			<path d="m17 22 3-3" />
		</g>
	</svg>
</div>

<style>
	.image-down {
		overflow: visible;
	}
	g.animate path {
		transform: translateY(2px);
		transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}
	g path {
		transform: translateY(0);
		transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}
</style>

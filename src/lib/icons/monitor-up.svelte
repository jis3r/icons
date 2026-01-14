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
	}

	function handleMouseLeave() {
		animate = false;
	}
</script>

<div
	class={className}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	aria-label="monitor-up"
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
	>
		<g class:animate>
			<path d="m9 10 3-3 3 3" />
			<path d="M12 13V7" />
		</g>
		<rect width="20" height="14" x="2" y="3" rx="2" />
		<path d="M12 17v4" />
		<path d="M8 21h8" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	g.animate path {
		transform: translateY(-2px);
		transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}
	g path {
		transform: translateY(0);
		transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}
</style>

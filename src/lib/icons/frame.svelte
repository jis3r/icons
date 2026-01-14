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
	aria-label="frame"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
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
		<line
			class:animate-line={animate}
			x1="22"
			x2="2"
			y1="6"
			y2="6"
			style:transform={animate ? 'translateY(-4px)' : 'translateY(0)'}
			style:transition="transform 0.17s ease-in-out"
		/>
		<line
			class:animate-line={animate}
			x1="22"
			x2="2"
			y1="18"
			y2="18"
			style:transform={animate ? 'translateY(4px)' : 'translateY(0)'}
			style:transition="transform 0.17s ease-in-out"
		/>
		<line
			class:animate-line={animate}
			x1="6"
			x2="6"
			y1="2"
			y2="22"
			style:transform={animate ? 'translateX(-4px)' : 'translateX(0)'}
			style:transition="transform 0.17s ease-in-out"
		/>
		<line
			class:animate-line={animate}
			x1="18"
			x2="18"
			y1="2"
			y2="22"
			style:transform={animate ? 'translateX(4px)' : 'translateX(0)'}
			style:transition="transform 0.17s ease-in-out"
		/>
	</svg>
</div>

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
		}, 200);
	}
</script>

<div class={className} aria-label="circle-arrow-down" role="img" onmouseenter={handleMouseEnter}>
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
		<circle cx="12" cy="12" r="10" />
		<path d="M12 8v4" />
		<path d="M12 12v4" class:head={isHovered} />
		<path d="m8 12 4 4 4-4" class:head={isHovered} />
	</svg>
</div>

<style>
	path {
		transition: all 0.2s ease-out;
	}
	.head {
		transform: translateY(-1.5px);
	}
</style>

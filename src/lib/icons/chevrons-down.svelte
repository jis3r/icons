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

<div class={className} aria-label="chevrons-down" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-down-icon"
		class:chevron-down={isHovered}
	>
		<path d="m7 6 5 5 5-5" />
		<path d="m7 13 5 5 5-5" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.chevrons-down-icon {
		overflow: visible;
		transition: all 0.2s ease-in;
	}

	.chevron-down {
		transform: translateY(3px);
	}
</style>

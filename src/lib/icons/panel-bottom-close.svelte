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
		if (isHovered) return;
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 300);
	}
</script>

<div class={className} aria-label="panel-bottom-close" role="img" onmouseenter={handleMouseEnter}>
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
		<rect width="18" height="18" x="3" y="3" rx="2" />
		<path d="M3 15h18" class:line={isHovered} />
		<path d="m15 8-3 3-3-3" class:chevron={isHovered} />
	</svg>
</div>

<style>
	path {
		transition: all 0.2s ease-in;
	}

	.line {
		transform: translateY(2px);
		transition-delay: 0.05s;
	}

	.chevron {
		transform: translateY(2px);
	}
</style>

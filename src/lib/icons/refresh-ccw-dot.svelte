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
	aria-label="refresh-ccw-dot"
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
		class="refresh-ccw-dot-icon"
		class:animate={isHovered}
	>
		<path d="M3 2v6h6" />
		<path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
		<path d="M21 22v-6h-6" />
		<path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
		<circle cx="12" cy="12" r="1" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.refresh-ccw-dot-icon {
		transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transform-origin: center;
	}
	.refresh-ccw-dot-icon.animate {
		transform: rotate(-50deg);
	}

	svg {
		overflow: visible;
	}
</style>

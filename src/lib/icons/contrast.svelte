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
	aria-label="contrast"
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
		class="contrast-icon"
		class:animate={isHovered}
	>
		<circle cx="12" cy="12" r="10" />
		<path class="right" d="M12 18a6 6 0 0 0 0-12v12z" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.contrast-icon {
		overflow: visible;
	}

	.right {
		transition: transform 0.3s ease;
		transform-origin: center;
	}

	/* Hover state */
	.contrast-icon.animate .right {
		transform: rotate(-180deg);
	}
</style>

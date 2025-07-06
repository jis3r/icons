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
	aria-label="toggle-right"
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
		class="toggle-right-icon"
		class:animate={isHovered}
	>
		<circle cx="15" cy="12" r="3" class="toggle-circle" />
		<rect width="20" height="14" x="2" y="5" rx="7" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.toggle-right-icon {
		overflow: visible;
	}

	.toggle-circle {
		transform: translateX(0);
		transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	.toggle-right-icon.animate .toggle-circle {
		transform: translateX(-6px);
	}
</style>

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
	aria-label="compass"
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
		class="compass-icon"
	>
		<circle cx="12" cy="12" r="10" />
		<polygon
			points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
			class:animate={isHovered}
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.compass-icon polygon {
		transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transform-origin: center;
	}

	.compass-icon polygon.animate {
		transform: rotate(360deg);
	}
</style>

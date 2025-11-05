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
	aria-label="expand"
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
		<path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" class="corner top-right" class:animate={isHovered} />
		<path d="M3 16.2V21m0 0h4.8M3 21l6-6" class="corner bottom-left" class:animate={isHovered} />
		<path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" class="corner top-left" class:animate={isHovered} />
		<path d="M3 7.8V3m0 0h4.8M3 3l6 6" class="corner bottom-right" class:animate={isHovered} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.corner {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.top-right.animate {
		transform: translate(2px, 2px);
	}

	.bottom-left.animate {
		transform: translate(-2px, 2px);
	}

	.top-left.animate {
		transform: translate(2px, -2px);
	}

	.bottom-right.animate {
		transform: translate(-2px, -2px);
	}

	svg {
		overflow: visible;
	}
</style>

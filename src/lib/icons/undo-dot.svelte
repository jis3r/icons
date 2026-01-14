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
	aria-label="undo-dot"
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
		class="undo-dot-icon"
		class:animate
	>
		<path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
		<path d="M3 7v6h6" />
		<circle cx="12" cy="17" r="1" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.undo-dot-icon {
		transform-origin: 14px 20px;
		transition: transform 0.3s ease;
	}

	.undo-dot-icon.animate {
		transform: rotate(-13deg);
	}
</style>

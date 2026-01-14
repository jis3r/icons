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
	aria-label="rotate-ccw-key"
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
		class="rotate-ccw-key-icon"
		class:animate
	>
		<g class="arrow" class:animate>
			<path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" />
			<path d="M3 3v5h5" />
		</g>
		<g class="key" class:animate>
			<path d="m14.5 9.5 1 1" />
			<path d="m15.5 8.5-4 4" />
			<circle cx="10" cy="14" r="2" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.rotate-ccw-key-icon,
	.arrow,
	.key {
		transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transform-origin: center;
	}

	.arrow.animate {
		transform: rotate(-50deg);
		transition-delay: 0.1s;
	}

	.key.animate {
		transform: rotate(-25deg);
	}

	svg {
		overflow: visible;
	}
</style>

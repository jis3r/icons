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
	aria-label="calendar-sync"
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
		class:animate={isHovered}
	>
		<g class="sync-arrows">
			<path d="M11 10v4h4" />
			<path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
			<path d="M21 22v-4h-4" />
			<path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
		</g>
		<path d="M16 2v4" />
		<path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
		<path d="M3 10h4" />
		<path d="M8 2v4" />
	</svg>
</div>

<style>
	.sync-arrows {
		transform-origin: center;
		transform-box: fill-box;
		transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.animate .sync-arrows {
		transform: rotate(-50deg);
	}

	svg {
		overflow: visible;
	}
</style>

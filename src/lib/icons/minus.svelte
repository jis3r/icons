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
		}, 500);
	}
</script>

<div class={className} aria-label="minus" role="img" onmouseenter={handleMouseEnter}>
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
		class="minus"
		class:animate={isHovered}
	>
		<path d="M5 12h14" class="horizontal" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.minus {
		overflow: visible;
	}

	.horizontal {
		stroke-dasharray: 14;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.minus.animate .horizontal {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 14;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 14;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

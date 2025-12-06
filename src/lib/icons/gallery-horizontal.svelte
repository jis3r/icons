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
		}, 600);
	}
</script>

<div class={className} aria-label="gallery-horizontal" role="img" onmouseenter={handleMouseEnter}>
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
		class="gallery-horizontal-icon"
		class:animate={isHovered}
	>
		<path d="M2 3v18" class="gallery-path gallery-path-1" />
		<rect width="12" height="18" x="6" y="3" rx="2" class="gallery-rect" />
		<path d="M22 3v18" class="gallery-path gallery-path-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.gallery-horizontal-icon {
		overflow: visible;
	}

	.gallery-path {
		opacity: 1;
		transform: scale(1) translateX(0);
		transform-origin: center;
	}

	.gallery-rect {
		opacity: 1;
		transform: scale(1);
		transform-origin: center;
	}

	.gallery-horizontal-icon.animate .gallery-path-1 {
		animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
	}

	.gallery-horizontal-icon.animate .gallery-path-2 {
		animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
	}

	@keyframes slideInLeft {
		0% {
			opacity: 0;
			transform: scale(0.8) translateX(4px);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateX(0);
		}
	}

	@keyframes slideInRight {
		0% {
			opacity: 0;
			transform: scale(0.8) translateX(-4px);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateX(0);
		}
	}
</style>

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
		}, 650);
	}
</script>

<div class={className} aria-label="layout-grid" role="img" onmouseenter={handleMouseEnter}>
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
		class="layout-grid-icon"
		class:animate={isHovered}
	>
		<rect width="7" height="7" x="3" y="3" rx="1" class="top-left-panel" />
		<rect width="7" height="7" x="14" y="3" rx="1" class="top-right-panel" />
		<rect width="7" height="7" x="14" y="14" rx="1" class="bottom-right-panel" />
		<rect width="7" height="7" x="3" y="14" rx="1" class="bottom-left-panel" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.layout-grid-icon {
		overflow: visible;
	}

	.layout-grid-icon.animate .top-right-panel {
		opacity: 0;
		animation: fadeInTop 0.35s ease-out forwards;
	}
	.layout-grid-icon.animate .bottom-right-panel {
		opacity: 0;
		animation: fadeInRight 0.35s ease-out 0.1s forwards;
	}
	.layout-grid-icon.animate .bottom-left-panel {
		opacity: 0;
		animation: fadeInBottom 0.35s ease-out 0.2s forwards;
	}
	.layout-grid-icon.animate .top-left-panel {
		opacity: 0;
		animation: fadeInLeft 0.35s ease-out 0.3s forwards;
	}

	@keyframes fadeInLeft {
		0%,
		50% {
			opacity: 0;
			transform: translateX(-10px);
		}
		80% {
			opacity: 0.8;
			transform: translateX(2px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes fadeInRight {
		0%,
		50% {
			opacity: 0;
			transform: translateX(10px);
		}
		80% {
			opacity: 0.8;
			transform: translateX(-2px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes fadeInTop {
		0%,
		50% {
			opacity: 0;
			transform: translateY(-10px);
		}
		80% {
			opacity: 0.8;
			transform: translateY(2px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeInBottom {
		0%,
		50% {
			opacity: 0;
			transform: translateY(10px);
		}
		80% {
			opacity: 0.8;
			transform: translateY(-2px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>

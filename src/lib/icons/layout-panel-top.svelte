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

<div class={className} aria-label="layout-panel-top" role="img" onmouseenter={handleMouseEnter}>
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
		class="layout-panel-top-icon"
		class:animate={isHovered}
	>
		<rect width="18" height="7" x="3" y="3" rx="1" class="top-panel" />
		<rect width="7" height="7" x="3" y="14" rx="1" class="bottom-left-panel" />
		<rect width="7" height="7" x="14" y="14" rx="1" class="bottom-right-panel" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.layout-panel-top-icon {
		overflow: visible;
	}

	.layout-panel-top-icon.animate .top-panel {
		opacity: 0;
		animation: fadeInTop 0.3s ease-in forwards;
	}

	.layout-panel-top-icon.animate .bottom-left-panel {
		opacity: 0;
		animation: fadeInLeft 0.4s ease-out 0.1s forwards;
	}

	.layout-panel-top-icon.animate .bottom-right-panel {
		opacity: 0;
		animation: fadeInRight 0.4s ease-out 0.2s forwards;
	}

	@keyframes fadeInTop {
		0%,
		20% {
			opacity: 0;
			transform: translateY(-5px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
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
</style>

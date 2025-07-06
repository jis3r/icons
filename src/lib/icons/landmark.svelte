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
		}, 750);
	}
</script>

<div class={className} aria-label="landmark" role="img" onmouseenter={handleMouseEnter}>
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
		class="landmark-icon"
		class:animate={isHovered}
	>
		<line x1="3" x2="21" y1="22" y2="22" class="floor" />
		<line x1="6" x2="6" y1="18" y2="11" class="column-1" />
		<line x1="10" x2="10" y1="18" y2="11" class="column-2" />
		<line x1="14" x2="14" y1="18" y2="11" class="column-3" />
		<line x1="18" x2="18" y1="18" y2="11" class="column-4" />
		<polygon points="12 2 20 7 4 7" class="roof" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.landmark-icon {
		overflow: visible;
	}

	.landmark-icon.animate .column-1 {
		opacity: 0;
		animation: fadeInLeft 0.35s ease-out 0.3s forwards;
	}

	.landmark-icon.animate .column-2 {
		opacity: 0;
		animation: fadeInLeft 0.35s ease-out 0.2s forwards;
	}

	.landmark-icon.animate .column-3 {
		opacity: 0;
		animation: fadeInLeft 0.35s ease-out 0.1s forwards;
	}

	.landmark-icon.animate .column-4 {
		opacity: 0;
		animation: fadeInLeft 0.35s ease-out 0s forwards;
	}

	.landmark-icon.animate .roof {
		opacity: 0;
		animation: fadeInTop 0.35s ease-out 0.4s forwards;
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
</style>

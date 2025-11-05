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
		}, 800);
	}
</script>

<div class={className} aria-label="briefcase" role="img" onmouseenter={handleMouseEnter}>
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
		class="briefcase-icon"
		class:animate={isHovered}
	>
		<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
		<rect width="20" height="14" x="2" y="6" rx="2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.briefcase-icon {
		transform-origin: top center;
		transform-box: fill-box;
	}

	.briefcase-icon.animate {
		animation: swing 0.8s ease-in-out;
	}

	@keyframes swing {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(12deg);
		}
		55% {
			transform: rotate(-10deg);
		}
		85% {
			transform: rotate(3deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

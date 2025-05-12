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
		}, 700);
	}
</script>

<div class={className} aria-label="house-wifi" role="img" onmouseenter={handleMouseEnter}>
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
		class="house-wifi-icon"
		class:animate={isHovered}
	>
		<path d="M9.5 13.866a4 4 0 0 1 5 .01" class="wifi-level wifi-line-1" />
		<path d="M12 17h.01" class="wifi-level wifi-dot" />
		<path
			d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
		/>
		<path d="M7 10.754a8 8 0 0 1 10 0" class="wifi-level wifi-line-2" />
	</svg>
</div>

<style>
	.house-wifi-icon {
		overflow: visible;
	}

	.wifi-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.house-wifi-icon.animate .wifi-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.house-wifi-icon.animate .wifi-dot {
		opacity: 0;
		animation-delay: 0.25s;
	}

	.house-wifi-icon.animate .wifi-line-1 {
		opacity: 0;
		animation-delay: 0.35s;
	}

	.house-wifi-icon.animate .wifi-line-2 {
		opacity: 0;
		animation-delay: 0.45s;
	}

	@keyframes fadeInSequence {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

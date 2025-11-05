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
		}, 1200);
	}
</script>

<div class={className} aria-label="signal-zero" role="img" onmouseenter={handleMouseEnter}>
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
		class="signal-icon"
		class:animate={isHovered}
	>
		<path d="M2 20h.01" class="signal-level" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.signal-icon {
		overflow: visible;
	}

	.signal-level {
		transition: opacity 0.2s ease;
	}

	.signal-icon.animate .signal-level {
		opacity: 0;
		animation: fadeInSequence 1.2s;
	}

	@keyframes fadeInSequence {
		0% {
			opacity: 1;
		}
		17% {
			opacity: 0;
		}
		33% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		67% {
			opacity: 1;
		}
		83% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

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
		}, 1000);
	}
</script>

<div class={className} aria-label="mouse-pointer" role="img" onmouseenter={handleMouseEnter}>
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
		class="mouse-pointer-icon"
		class:animate={isHovered}
	>
		<path d="M12.586 12.586 19 19" /><path
			d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.mouse-pointer-icon {
		overflow: visible;
	}

	.mouse-pointer-icon.animate {
		animation: mouseMove 1s ease;
	}

	@keyframes mouseMove {
		0%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(0, -4px);
		}
		75% {
			transform: translate(-3px, 0);
		}
	}
</style>

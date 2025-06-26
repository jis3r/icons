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
		}, 600);
	}
</script>

<div class={className} aria-label="mouse-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="mouse-off"
		class:animate={isHovered}
	>
		<path d="M12 6v.343" />
		<path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" />
		<path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" />
		<path d="M22 22 2 2" />
	</svg>
</div>

<style>
	.mouse-off {
		overflow: visible;
	}

	.mouse-off {
		overflow: visible;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.mouse-off.animate {
		animation: groupShake 0.6s ease-in-out;
	}

	@keyframes groupShake {
		0% {
			transform: translateX(0);
		}
		16.67% {
			transform: translateX(-7%);
		}
		33.33% {
			transform: translateX(7%);
		}
		50% {
			transform: translateX(-7%);
		}
		66.67% {
			transform: translateX(7%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>

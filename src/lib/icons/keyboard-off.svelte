<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [color]
	 * @property {number} [size]
	 * @property {number} [strokeWidth]
	 * @property {boolean} [animate]
	 * @property {string} [class]
	 */

	/** @type {Props} */
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate = false,
		class: className = ''
	} = $props();

	function handleMouseEnter() {
		if (animate) return;
		animate = true;
		setTimeout(() => {
			animate = false;
		}, 600);
	}
</script>

<div class={className} aria-label="keyboard-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="keyboard-off"
		class:animate
	>
		<path d="M 20 4 A2 2 0 0 1 22 6" />
		<path d="M 22 6 L 22 16.41" />
		<path d="M 7 16 L 16 16" />
		<path d="M 9.69 4 L 20 4" />
		<path d="M14 8h.01" />
		<path d="M18 8h.01" />
		<path d="m2 2 20 20" />
		<path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
		<path d="M6 8h.01" />
		<path d="M8 12h.01" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.keyboard-off {
		overflow: visible;
	}

	.keyboard-off {
		overflow: visible;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.keyboard-off.animate {
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

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
		animate = true;

		setTimeout(() => {
			animate = false;
		}, 600);
	}
</script>

<div class={className} aria-label="brush" role="img" onmouseenter={handleMouseEnter}>
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
		class="brush-icon"
		class:animate
	>
		<path d="m11 10 3 3" />
		<path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" />
		<path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.brush-icon {
		transform-origin: top right;
	}

	.brush-icon.animate {
		animation: brushRotation 0.6s ease-in-out;
	}

	@keyframes brushRotation {
		0% {
			transform: rotate(0deg);
		}
		33% {
			transform: rotate(-6deg);
		}
		66% {
			transform: rotate(6deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

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
		}, 400);
	}
</script>

<div class={className} aria-label="vibrate" role="img" onmouseenter={handleMouseEnter}>
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
	>
		<path d="m2 8 2 2-2 2 2 2-2 2" />
		<path d="m22 8-2 2 2 2-2 2 2 2" />
		<rect width="8" height="14" x="8" y="5" rx="1" class="vibrate-rect" class:animate />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.vibrate-rect {
		transform: rotate(0deg);
		transition: transform 0.4s ease;
	}

	.vibrate-rect.animate {
		transform-origin: center;
		animation: vibrate 0.4s ease;
	}

	@keyframes vibrate {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-5deg);
		}
		40% {
			transform: rotate(5deg);
		}
		60% {
			transform: rotate(-5deg);
		}
		80% {
			transform: rotate(5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

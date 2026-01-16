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
		}, 1000);
	}
</script>

<div class={className} aria-label="shovel" role="img" onmouseenter={handleMouseEnter}>
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
		class="shovel-icon"
		class:animate
	>
		<path d="M2 22v-5l5-5 5 5-5 5z" />
		<path d="M9.5 14.5 16 8" />
		<path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0 3.53 3.53 0 0 1 0-5L17 2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.shovel-icon {
		transition: transform 0.3s ease;
	}

	.shovel-icon.animate {
		animation: dig 0.5s ease-out 2;
	}

	@keyframes dig {
		0% {
			transform: translate(0, 0);
		}
		60% {
			transform: translate(2px, -2px);
		}
		80% {
			transform: translate(-5px, 5px);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>

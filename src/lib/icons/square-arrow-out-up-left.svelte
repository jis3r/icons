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
		}, 500);
	}
</script>

<div
	class={className}
	aria-label="square-arrow-out-up-left"
	role="img"
	onmouseenter={handleMouseEnter}
>
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
		<path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
		<g class="arrow" class:animate>
			<path d="m3 3 9 9" />
			<path d="M3 9V3h6" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.arrow {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.arrow.animate {
		animation: moveUpLeft 0.5s;
	}
	@keyframes moveUpLeft {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(2px, 2px);
		}
	}
</style>

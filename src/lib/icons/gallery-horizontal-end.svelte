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

<div
	class={className}
	aria-label="gallery-horizontal-end"
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
		<path d="M2 7v10" class:animate={isHovered} custom={1} />
		<path d="M6 5v14" class:animate={isHovered} custom={2} />
		<rect width="12" height="18" x="10" y="3" rx="2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	path {
		transition:
			transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			opacity 0.3s ease;
		transform-origin: center;
		opacity: 1;
		transform: translateX(0);
	}

	path[custom='1'].animate {
		animation: disappearThenAppear1 0.6s forwards;
	}

	path[custom='2'].animate {
		animation: disappearThenAppear2 0.6s forwards;
	}

	@keyframes disappearThenAppear1 {
		0% {
			opacity: 0;
			transform: translateX(3px);
		}
		60% {
			opacity: 0;
			transform: translateX(3px);
		}
		80% {
			opacity: 1;
			transform: translateX(0);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes disappearThenAppear2 {
		0% {
			opacity: 0;
			transform: translateX(3px);
		}
		40% {
			opacity: 0;
			transform: translateX(3px);
		}
		60% {
			opacity: 1;
			transform: translateX(0);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>

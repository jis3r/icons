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
		}, 500);
	}
</script>

<div
	class={className}
	aria-label="message-circle-question-mark"
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
		class:animate-icon={isHovered}
	>
		<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
		<g class:animate-path={isHovered}>
			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
			<path d="M12 17h.01" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.animate-icon {
		transition: transform 0.5s ease-in-out;
	}

	.animate-path {
		transition: transform 0.5s ease-in-out;
		transform-origin: center;
		animation: rotateAnimation 0.5s ease-in-out;
	}

	@keyframes rotateAnimation {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-10deg);
		}
		40% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(-10deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

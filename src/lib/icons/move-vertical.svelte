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

<div class={className} aria-label="move-vertical" role="img" onmouseenter={handleMouseEnter}>
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
		class:animate={isHovered}
	>
		<path d="M12 2v20" /><path d="m8 18 4 4 4-4" /><path d="m8 6 4-4 4 4" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	path {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.animate {
		animation: moveVertical 1s;
	}

	@keyframes moveVertical {
		0%,
		45%,
		55%,
		100% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-3px);
		}
		75% {
			transform: translateY(3px);
		}
	}
</style>

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

<div class={className} aria-label="pen-line" role="img" onmouseenter={handleMouseEnter}>
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
		class="pen-line-icon"
	>
		<path d="M12 20h9" />
		<path
			d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
			class="pen"
			class:animate={isHovered}
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.pen-line-icon {
		overflow: visible;
	}

	.pen {
		transform-origin: 16.376px 3.622px;
		transition: transform 0.25s ease-in-out;
	}

	.pen.animate {
		animation: penWiggle 0.5s ease-in-out 2;
	}

	@keyframes penWiggle {
		0%,
		100% {
			transform: rotate(0deg) translate(0px, 0px);
		}
		25% {
			transform: rotate(-0.5deg) translate(-1px, 1.5px);
		}
		75% {
			transform: rotate(0.5deg) translate(1.5px, -1px);
		}
	}
</style>

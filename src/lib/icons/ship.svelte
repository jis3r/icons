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
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={className}
	aria-label="ship"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
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
		class="ship-icon"
		class:animate={isHovered}
	>
		<path
			d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			class="wave"
		/>
		<g class="ship-body">
			<path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
			<path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
			<path d="M12 10v4" />
			<path d="M12 2v3" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.ship-icon {
		overflow: visible;
	}

	.wave {
		stroke-dasharray: 30;
		transition: stroke-dashoffset 0.6s ease-in-out;
		opacity: 1;
	}

	.ship-icon.animate .wave {
		animation: wave 0.6s ease-in-out;
	}

	.ship-body {
		transform-origin: center;
		transition: transform 1.2s ease-in-out;
	}

	.ship-icon.animate .ship-body {
		animation: rockShip 2.4s ease-in-out infinite forwards;
	}

	@keyframes rockShip {
		0%,
		100% {
			transform: rotate(-3deg);
		}
		50% {
			transform: rotate(3deg);
		}
	}

	@keyframes wave {
		0% {
			stroke-dashoffset: 30;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

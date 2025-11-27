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
		}, 1100);
	}
</script>

<div class={className} aria-label="lightbulb" role="img" onmouseenter={handleMouseEnter}>
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
		class="lightbulb-icon"
		class:animate={isHovered}
	>
		<path
			d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
			class="lightbulb-path1"
		/>
		<path d="M9 18h6" class="lightbulb-path2" />
		<path d="M10 22h4" class="lightbulb-path3" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.lightbulb-icon {
		overflow: visible;
	}

	.lightbulb-path1 {
		transform-origin: bottom center;
		transform-box: fill-box;
		fill: transparent;
		transition: fill 0s;
	}

	.lightbulb-path2 {
		transform-origin: bottom center;
		transform-box: fill-box;
	}

	.lightbulb-icon.animate .lightbulb-path1 {
		animation:
			lightbulb-rotate1 0.8s ease-in-out forwards,
			lightbulb-fill-opacity 0.3s ease-in-out 0.4s forwards;
		fill: currentColor;
		fill-opacity: 0;
	}

	.lightbulb-icon:not(.animate) .lightbulb-path1 {
		fill: transparent;
	}

	.lightbulb-icon.animate .lightbulb-path2 {
		animation: lightbulb-rotate2 0.8s ease-in-out forwards;
	}

	@keyframes lightbulb-rotate1 {
		0% {
			transform: rotate(0deg);
		}
		40% {
			transform: rotate(-20deg);
		}
		60% {
			transform: rotate(15deg);
		}
		80% {
			transform: rotate(-7deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes lightbulb-fill-opacity {
		0% {
			fill-opacity: 0;
		}
		40% {
			fill-opacity: 1;
		}
		60% {
			fill-opacity: 0;
		}
		80% {
			fill-opacity: 1;
		}
		100% {
			fill-opacity: 0;
		}
	}

	@keyframes lightbulb-rotate2 {
		0% {
			transform: rotate(0deg);
		}
		40% {
			transform: rotate(0deg);
		}
		60% {
			transform: rotate(10deg);
		}
		80% {
			transform: rotate(-5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

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
	aria-label="file-pen-line"
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
		class="file-pen-line-icon"
		class:animate={isHovered}
	>
		<path
			d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
		/>
		<path
			d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
			class="pen"
		/>
		<path d="M8 18h1" class="line" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.file-pen-line-icon {
		overflow: visible;
	}

	.pen {
		transform-origin: 19.876px 11.124px;
		transition: transform 0.25s ease-in-out;
	}

	.file-pen-line-icon.animate .pen {
		animation: penWiggle 0.5s ease-in-out 2;
	}

	@keyframes penWiggle {
		0%,
		100% {
			transform: rotate(0deg) translate(0px, 0px);
		}
		25% {
			transform: rotate(-0.3deg) translate(-0.5px, 1px);
		}
		50% {
			transform: rotate(0.2deg) translate(1px, -0.5px);
		}
		75% {
			transform: rotate(-0.4deg) translate(0px, 0px);
		}
	}

	.line {
		transition: d 0.5s ease-in-out;
	}

	.file-pen-line-icon.animate .line {
		d: path('M8 18h5');
	}
</style>

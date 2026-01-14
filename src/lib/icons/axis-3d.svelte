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
		}, 900);
	}
</script>

<div class={className} aria-label="axis-3d" role="img" onmouseenter={handleMouseEnter}>
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
		class="axis-3d-icon"
		class:animate
	>
		<path d="M4 4v15a1 1 0 0 0 1 1h15" class="axis-3d-path1" />
		<g class="axis-3d-group">
			<path d="M4.293 19.707 6 18" class="axis-3d-path2" />
			<path d="m9 15 1.5-1.5" class="axis-3d-path3" />
			<path d="M13.5 10.5 15 9" class="axis-3d-path4" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.axis-3d-icon {
		overflow: visible;
	}

	.axis-3d-path2,
	.axis-3d-path3,
	.axis-3d-path4 {
		stroke-dasharray: 10;
		stroke-dashoffset: 0;
		opacity: 1;
		transition:
			stroke-dashoffset 0.1s ease-in-out,
			opacity 0.1s ease-in-out;
	}

	.axis-3d-icon.animate .axis-3d-path2 {
		opacity: 0;
		stroke-dashoffset: 10;
		animation: drawPath2 0.3s ease-in-out 0.2s forwards;
	}

	.axis-3d-icon.animate .axis-3d-path3 {
		opacity: 0;
		stroke-dashoffset: 10;
		animation: drawPath3 0.3s ease-in-out 0.4s forwards;
	}

	.axis-3d-icon.animate .axis-3d-path4 {
		opacity: 0;
		stroke-dashoffset: 10;
		animation: drawPath4 0.3s ease-in-out 0.6s forwards;
	}

	@keyframes drawPath2 {
		0% {
			stroke-dashoffset: 10;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}

	@keyframes drawPath3 {
		0% {
			stroke-dashoffset: 10;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}

	@keyframes drawPath4 {
		0% {
			stroke-dashoffset: 10;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

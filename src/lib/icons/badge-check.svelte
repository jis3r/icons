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
		}, 1200);
	}
</script>

<div class={className} aria-label="badge-check" role="img" onmouseenter={handleMouseEnter}>
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
		class="badge-check-icon"
		class:animate
	>
		<path
			d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
			class="badge-path"
		/>
		<path d="m9 12 2 2 4-4" class="check-path" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.badge-check-icon {
		overflow: visible;
	}

	.badge-path {
		transform-origin: center;
		transition: transform 1.2s ease-in-out;
	}

	.check-path {
		stroke-dasharray: 10;
		stroke-dashoffset: 0;
		opacity: 1;
		transition:
			stroke-dashoffset 1.2s ease-in-out,
			opacity 0.01s ease-in-out;
	}

	.badge-check-icon.animate .badge-path {
		animation: scaleBadge 1.2s ease-in-out;
	}

	.badge-check-icon.animate .check-path {
		animation: drawCheck 1.2s ease-in-out;
	}

	@keyframes scaleBadge {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.9);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes drawCheck {
		0% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
		50% {
			stroke-dashoffset: 10;
			opacity: 1;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

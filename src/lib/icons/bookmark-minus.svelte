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
		}, 600);
	}
</script>

<div class={className} aria-label="bookmark-minus" role="img" onmouseenter={handleMouseEnter}>
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
		class="bookmark-minus-icon"
		class:animate
	>
		<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" class="bookmark-path" />
		<path d="M9 10h6" class="horizontal" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.bookmark-minus-icon {
		overflow: visible;
	}

	.bookmark-path {
		transform-origin: center;
		transition: transform 0.3s ease-out;
	}

	.horizontal {
		stroke-dasharray: 6;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.bookmark-minus-icon.animate .bookmark-path {
		animation: bookmarkBounce 0.6s ease-out;
	}

	.bookmark-minus-icon.animate .horizontal {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	@keyframes bookmarkBounce {
		0% {
			transform: scale(1, 1);
		}
		25% {
			transform: scale(0.9, 1.3);
		}
		50% {
			transform: scale(1.1, 0.9);
		}
		75% {
			transform: scale(0.95, 1.05);
		}
		100% {
			transform: scale(1, 1);
		}
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 6;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 6;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

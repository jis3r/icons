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

<div class={className} aria-label="bookmark-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="bookmark-x-icon"
		class:animate={isHovered}
	>
		<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" class="bookmark-path" />
		<path d="m14.5 7.5-5 5" class="diagonal-1" />
		<path d="m9.5 7.5 5 5" class="diagonal-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.bookmark-x-icon {
		overflow: visible;
	}

	.bookmark-path {
		transform-origin: center;
		transition: transform 0.3s ease-out;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 8;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.bookmark-x-icon.animate .bookmark-path {
		animation: bookmarkBounce 0.6s ease-out;
	}

	.bookmark-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.bookmark-x-icon.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
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
			stroke-dashoffset: 8;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 8;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

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
		}, 700);
	}
</script>

<div class={className} aria-label="square stack" role="img" onmouseenter={handleMouseEnter}>
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
		class="square-stack-icon"
		class:animate={isHovered}
	>
		<path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" class="path-1" />
		<path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" class="path-2" />
		<rect width="8" height="8" x="14" y="14" rx="2" class="rect" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.square-stack-icon {
		overflow: visible;
	}

	.path-1,
	.path-2,
	.rect {
		transition: transform 0.4s ease;
		transform-origin: center;
	}

	.square-stack-icon.animate .path-1 {
		animation: scalePath 0.4s ease 0.3s;
	}

	.square-stack-icon.animate .path-2 {
		animation: scalePath 0.4s ease 0.15s;
	}

	.square-stack-icon.animate .rect {
		animation: scaleRect 0.4s ease;
	}

	@keyframes scalePath {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.9);
		}
	}

	@keyframes scaleRect {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.9);
		}
	}
</style>

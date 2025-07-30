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

	function handleTouchStart() {
		isHovered = true;
	}

	function handleTouchEnd() {
		isHovered = false;
	}
</script>

<div
	class={className}
	aria-label="audio-lines"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
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
		class="audio-lines-icon"
		class:animate={isHovered}
	>
		<path d="M2 10v3" />
		<path d="M6 6v11" class="line line1" />
		<path d="M10 3v18" class="line line2" />
		<path d="M14 8v7" class="line line3" />
		<path d="M18 5v13" class="line line4" />
		<path d="M22 10v3" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.audio-lines-icon {
		overflow: visible;
	}

	/* Base transitions for smooth hover effects */
	.line {
		transition: all 0.3s ease;
	}

	/* Default state - original line lengths */
	.line1 {
		d: path('M6 6v11');
	}

	.line2 {
		d: path('M10 3v18');
	}

	.line3 {
		d: path('M14 8v7');
	}

	.line4 {
		d: path('M18 5v13');
	}

	/* Animated state when hovered - shorter line lengths with smooth animation */
	.audio-lines-icon.animate .line1 {
		d: path('M6 10v3');
		animation: line1Pulse 1.5s infinite ease-in-out;
	}

	.audio-lines-icon.animate .line2 {
		d: path('M10 9v5');
		animation: line2Pulse 1s infinite ease-in-out;
	}

	.audio-lines-icon.animate .line3 {
		d: path('M14 6v11');
		animation: line3Pulse 0.8s infinite ease-in-out;
	}

	.audio-lines-icon.animate .line4 {
		d: path('M18 7v9');
		animation: line4Pulse 1.5s infinite ease-in-out;
	}

	/* Subtle pulsing animations during hover */
	@keyframes line1Pulse {
		0%, 100% {
			opacity: 0.7;
		}
		50% {
			opacity: 1;
		}
	}

	@keyframes line2Pulse {
		0%, 100% {
			opacity: 0.8;
		}
		50% {
			opacity: 1;
		}
	}

	@keyframes line3Pulse {
		0%, 100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}

	@keyframes line4Pulse {
		0%, 100% {
			opacity: 0.75;
		}
		50% {
			opacity: 1;
		}
	}
</style>

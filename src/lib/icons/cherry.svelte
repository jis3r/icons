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
		}, 800);
	}
</script>

<div class={className} aria-label="cherry" role="img" onmouseenter={handleMouseEnter}>
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
		class="cherry-icon"
	>
		<g class:animate-group={animate}>
			<path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
			<path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
			<path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
			<path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.cherry-icon {
		overflow: visible;
	}

	.animate-group {
		animation: cherrySwing 0.8s ease-in-out;
		transform-origin: top center;
	}

	@keyframes cherrySwing {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(-12deg);
		}
		50% {
			transform: rotate(7deg);
		}
		75% {
			transform: rotate(-4deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

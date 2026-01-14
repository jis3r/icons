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
		}, 1100);
	}
</script>

<div class={className} aria-label="bell-ring" role="img" onmouseenter={handleMouseEnter}>
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
		class:animate-svg={animate}
	>
		<path d="M4 2C2.8 3.7 2 5.7 2 8" class:animate-bell={animate} />
		<path d="M22 8c0-2.3-.8-4.3-2-6" class:animate-bell={animate} />
		<path
			d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
			class:animate-bell={animate}
		/>
		<path d="M10.268 21a2 2 0 0 0 3.464 0" class:animate-clapper={animate} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.animate-svg {
		transform-origin: top center;
		animation: bellRing 0.9s ease-in-out;
	}

	.animate-bell {
		animation: bellMove 1.1s ease-in-out;
	}

	.animate-clapper {
		animation: clapperMove 1.1s ease-in-out;
	}

	@keyframes bellRing {
		0% {
			transform: rotate(0deg);
		}
		16.67% {
			transform: rotate(20deg);
		}
		33.33% {
			transform: rotate(-10deg);
		}
		50% {
			transform: rotate(10deg);
		}
		66.67% {
			transform: rotate(-5deg);
		}
		83.33% {
			transform: rotate(3deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes clapperMove {
		0% {
			transform: translateX(0);
		}
		14.29% {
			transform: translateX(-6px);
		}
		28.57% {
			transform: translateX(5px);
		}
		42.86% {
			transform: translateX(-5px);
		}
		57.14% {
			transform: translateX(4px);
		}
		71.43% {
			transform: translateX(-3px);
		}
		85.71% {
			transform: translateX(2px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>

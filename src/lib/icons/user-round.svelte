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

<div class={className} aria-label="user-round" role="img" onmouseenter={handleMouseEnter}>
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
		class="user-round-icon"
		class:animate
	>
		<path d="M20 21a8 8 0 0 0-16 0" class="user-round-path" />
		<circle cx="12" cy="8" r="5" class="user-round-circle" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.user-round-path,
	.user-round-circle {
		transition: transform 0.6s ease-in-out;
	}

	.user-round-icon.animate .user-round-path {
		animation: pathBounce 0.6s ease-in-out;
	}

	.user-round-icon.animate .user-round-circle {
		animation: circleBounce 0.6s ease-in-out;
	}

	@keyframes pathBounce {
		0% {
			transform: translateY(0);
		}
		33% {
			transform: translateY(4px);
		}
		66% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes circleBounce {
		0% {
			transform: translateY(0);
		}
		33% {
			transform: translateY(1px);
		}
		66% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>

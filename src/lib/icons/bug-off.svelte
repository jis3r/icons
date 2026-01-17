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

<div class={className} aria-label="bug-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="bug-off"
		class:animate
	>
		<path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
		<path d="M14.12 3.88 16 2" />
		<path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" />
		<path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
		<path d="m2 2 20 20" />
		<path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
		<path d="M12 20v-8" />
		<path d="M6 13H2" />
		<path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.bug-off {
		overflow: visible;
	}

	.bug-off {
		overflow: visible;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.bug-off.animate {
		animation: groupShake 0.6s ease-in-out;
	}

	@keyframes groupShake {
		0% {
			transform: translateX(0);
		}
		16.67% {
			transform: translateX(-7%);
		}
		33.33% {
			transform: translateX(7%);
		}
		50% {
			transform: translateX(-7%);
		}
		66.67% {
			transform: translateX(7%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>

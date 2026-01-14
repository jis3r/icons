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
		}, 600);
	}
</script>

<div class={className} aria-label="dna-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="dna-off"
		class:animate
	>
		<path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
		<path d="m17 6-2.891-2.891" />
		<path d="M2 15c3.333-3 6.667-3 10-3" />
		<path d="m2 2 20 20" />
		<path d="m20 9 .891.891" />
		<path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
		<path d="M3.109 14.109 4 15" />
		<path d="m6.5 12.5 1 1" />
		<path d="m7 18 2.891 2.891" />
		<path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.dna-off {
		overflow: visible;
	}

	.dna-off {
		overflow: visible;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.dna-off.animate {
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

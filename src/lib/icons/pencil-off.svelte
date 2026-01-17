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

<div class={className} aria-label="pencil-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="pencil-off"
		class:animate
	>
		<path
			d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
		/>
		<path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
		<path d="m15 5 4 4" />
		<path d="m2 2 20 20" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.pencil-off {
		overflow: visible;
	}

	.pencil-off {
		overflow: visible;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.pencil-off.animate {
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

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
		}, 3000);
	}
</script>

<div class={className} aria-label="orbit" role="img" onmouseenter={handleMouseEnter}>
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
		class="orbit-icon"
		class:animate
	>
		<circle cx="12" cy="12" r="3" /><circle cx="19" cy="5" r="2" /><circle
			cx="5"
			cy="19"
			r="2"
		/><path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" /><path
			d="M13.5 2.1a10 10 0 0 0-9.841 15.416"
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.orbit-icon {
		transform-origin: center center;
		transition: transform 1s ease-in-out;
	}

	.orbit-icon.animate {
		animation: rotate-path 3s ease-in-out;
	}

	@keyframes rotate-path {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-1080deg);
		}
	}
</style>

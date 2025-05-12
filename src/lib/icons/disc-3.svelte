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
		}, 3000);
	}
</script>

<div class={className} aria-label="disc-3" role="img" onmouseenter={handleMouseEnter}>
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
		class="disc3-icon"
		class:animate={isHovered}
		><circle cx="12" cy="12" r="10" /><path d="M6 12c0-1.7.7-3.2 1.8-4.2" /><circle
			cx="12"
			cy="12"
			r="2"
		/><path d="M18 12c0 1.7-.7 3.2-1.8 4.2" /></svg
	>
</div>

<style>
	.disc3-icon {
		transform-origin: center center;
		transition: transform 1s ease-in-out;
	}

	.disc3-icon.animate {
		animation: rotate-disc 3s ease-in-out;
	}

	@keyframes rotate-disc {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(1080deg);
		}
	}
</style>

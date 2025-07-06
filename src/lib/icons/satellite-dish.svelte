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

<div class={className} aria-label="satellite-dish" role="img" onmouseenter={handleMouseEnter}>
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
		class="satellite-dish-icon"
		class:animate={isHovered}
		><path d="M4 10a7.31 7.31 0 0 0 10 10Z" /><path d="m9 15 3-3" /><path
			d="M17 13a6 6 0 0 0-6-6"
			class="dish-level dish-line-1"
		/><path d="M21 13A10 10 0 0 0 11 3" class="dish-level dish-line-2" /></svg
	>
</div>

<style>
	div {
		display: inline-block;
	}
	.satellite-dish-icon {
		overflow: visible;
	}

	.dish-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.satellite-dish-icon.animate .dish-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.satellite-dish-icon.animate .dish-line-1 {
		opacity: 0;
		animation-delay: 0.25s;
	}

	.satellite-dish-icon.animate .dish-line-2 {
		opacity: 0;
		animation-delay: 0.35s;
	}

	@keyframes fadeInSequence {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

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

<div class={className} aria-label="washing-machine" role="img" onmouseenter={handleMouseEnter}>
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
		class="washing-machine-icon"
		><path d="M3 6h3" /><path d="M17 6h.01" /><rect width="18" height="20" x="3" y="2" rx="2" /><g
			class="drum"
			class:animate={isHovered}
		>
			<circle cx="12" cy="13" r="5" /><path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" /></g
		></svg
	>
</div>

<style>
	.drum {
		transform-origin: center 13px;
		transition: transform 1s ease-in-out;
	}

	.drum.animate {
		animation: rotate-drum 3s ease-in-out;
	}

	@keyframes rotate-drum {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-1080deg);
		}
	}
</style>

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
		}, 1000);
	}
</script>

<div class={className} aria-label="dice-3" role="img" onmouseenter={handleMouseEnter}>
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
		class="dice-3-icon"
		class:animate={isHovered}
	>
		<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M16 8h.01" /><path
			d="M12 12h.01"
		/><path d="M8 16h.01" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.dice-3-icon {
		overflow: visible;
	}
	.dice-3-icon.animate {
		animation: diceRoll 1s ease-in-out;
	}

	@keyframes diceRoll {
		0% {
			transform: translateX(0) rotate(0deg);
		}
		25% {
			transform: translateX(-20%) rotate(45deg);
		}
		50% {
			transform: translateX(0) rotate(90deg);
		}
		75% {
			transform: translateX(-20%) rotate(135deg);
		}
		100% {
			transform: translateX(0) rotate(180deg);
		}
	}
</style>

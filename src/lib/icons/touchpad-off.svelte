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
		}, 600);
	}
</script>

<div class={className} aria-label="touchpad-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="touchpad-off"
		class:animate={isHovered}
	>
		<path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" />
		<path d="M2 14h12" />
		<path d="M22 14h-2" />
		<path d="M12 20v-6" />
		<path d="m2 2 20 20" />
		<path d="M22 16V6a2 2 0 0 0-2-2H10" />
	</svg>
</div>

<style>
	.touchpad-off {
		overflow: visible;
	}

	.touchpad-off {
		overflow: visible;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.touchpad-off.animate {
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

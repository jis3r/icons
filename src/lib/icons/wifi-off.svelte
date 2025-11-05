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

<div class={className} aria-label="wifi-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="wifi-off"
		class:animate={isHovered}
	>
		<path d="M12 20h.01" />
		<path d="M8.5 16.429a5 5 0 0 1 7 0" />
		<path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
		<path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
		<path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
		<path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
		<path d="m2 2 20 20" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.wifi-off {
		overflow: visible;
	}

	.wifi-off {
		overflow: visible;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.wifi-off.animate {
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

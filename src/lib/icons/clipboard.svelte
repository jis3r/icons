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

<div class={className} aria-label="clipboard" role="img" onmouseenter={handleMouseEnter}>
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
		class="clipboard-icon"
		class:animate={isHovered}
	>
		<rect width="8" height="4" x="8" y="2" rx="1" ry="1" class="clip" />
		<path
			d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
			class="board"
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.clipboard-icon {
		overflow: visible;
	}

	.clip,
	.board {
		transition: transform 0.3s ease;
	}

	.clipboard-icon.animate .clip {
		animation: clipBounce 0.5s ease-in-out;
	}

	.clipboard-icon.animate .board {
		animation: boardShake 0.5s ease-in-out;
	}

	@keyframes clipBounce {
		0% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-2px);
		}
		50% {
			transform: translateY(1px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes boardShake {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(-1deg);
		}
		75% {
			transform: rotate(1deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

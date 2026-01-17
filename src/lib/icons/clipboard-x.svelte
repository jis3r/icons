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

<div class={className} aria-label="clipboard-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="clipboard-x-icon"
		class:animate
	>
		<rect width="8" height="4" x="8" y="2" rx="1" ry="1" class="clip" />
		<path
			d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
			class="board"
		/>
		<path d="m15 11-6 6" class="diagonal-1" />
		<path d="m9 11 6 6" class="diagonal-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.clipboard-x-icon {
		overflow: visible;
	}

	.clip,
	.board {
		transition: transform 0.3s ease;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 8.5;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.clipboard-x-icon.animate .clip {
		animation: clipBounce 0.5s ease-in-out;
	}

	.clipboard-x-icon.animate .board {
		animation: boardShake 0.5s ease-in-out;
	}

	.clipboard-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.clipboard-x-icon.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 8.5;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 8.5;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
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

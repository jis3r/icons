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
		size = 28,
		strokeWidth = 2,
		animate = false,
		class: className = ''
	} = $props();

	function handleMouseEnter() {
		if (animate) return;
		animate = true;
		setTimeout(() => {
			animate = false;
		}, 700);
	}
</script>

<div class={className} aria-label="clipboard-list" role="img" onmouseenter={handleMouseEnter}>
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
		class="clipboard-list-icon"
		class:animate
	>
		<rect width="8" height="4" x="8" y="2" rx="1" ry="1" class="clip" />
		<path
			d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
			class="board"
		/>
		<path d="M12 11h4" class="list-item-1 list-item" />
		<path d="M12 16h4" class="list-item-2 list-item" />
		<path d="M8 11h.01" class="bullet bullet-1" />
		<path d="M8 16h.01" class="bullet bullet-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.clipboard-list-icon {
		overflow: visible;
	}

	.clip,
	.board {
		transition: transform 0.3s ease;
	}

	.list-item {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	.bullet {
		opacity: 1;
		transition: opacity 0.3s ease;
		transform-origin: center;
	}

	.clipboard-list-icon.animate .list-item,
	.clipboard-list-icon.animate .bullet {
		opacity: 0;
	}

	.clipboard-list-icon.animate .clip {
		animation: clipBounce 0.5s ease-in-out;
	}

	.clipboard-list-icon.animate .board {
		animation: boardShake 0.5s ease-in-out;
	}

	.clipboard-list-icon.animate .list-item-1 {
		animation: lineFadeIn 0.2s ease-out forwards;
		animation-delay: 0.15s;
	}

	.clipboard-list-icon.animate .bullet-1 {
		animation: bulletFadeIn 0.2s ease-out forwards;
		animation-delay: 0.2s;
	}

	.clipboard-list-icon.animate .list-item-2 {
		animation: lineFadeIn 0.2s ease-out forwards;
		animation-delay: 0.3s;
	}

	.clipboard-list-icon.animate .bullet-2 {
		animation: bulletFadeIn 0.2s ease-out forwards;
		animation-delay: 0.35s;
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

	@keyframes bulletFadeIn {
		from {
			opacity: 0;
			transform: translateX(-6px) scale(0.8);
		}
		to {
			opacity: 1;
			transform: translateX(0) scale(1);
		}
	}

	@keyframes lineFadeIn {
		from {
			opacity: 0;
			transform: translateX(-8px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>

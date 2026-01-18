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

	let line1Y1 = $state(10);
	let line1Y2 = $state(10);
	let line2Y1 = $state(10);
	let line2Y2 = $state(10);
	let line3Y1 = $state(10);
	let line3Y2 = $state(10);

	function easeInOut(t) {
		return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
	}

	function animateLine(startY1, startY2, midY1, midY2, endY1, endY2, duration, delay, callback) {
		setTimeout(() => {
			const startTime = performance.now();
			function frame(currentTime) {
				const elapsed = (currentTime - startTime) / 1000;
				const progress = Math.min(elapsed / duration, 1);
				const eased = easeInOut(progress);

				let y1, y2;
				if (progress < 0.5) {
					const t = progress * 2;
					const localEased = easeInOut(t);
					y1 = startY1 + (midY1 - startY1) * localEased;
					y2 = startY2 + (midY2 - startY2) * localEased;
				} else {
					const t = (progress - 0.5) * 2;
					const localEased = easeInOut(t);
					y1 = midY1 + (endY1 - midY1) * localEased;
					y2 = midY2 + (endY2 - midY2) * localEased;
				}

				callback(y1, y2);

				if (progress < 1) {
					requestAnimationFrame(frame);
				} else {
					callback(endY1, endY2);
				}
			}
			requestAnimationFrame(frame);
		}, delay * 1000);
	}

	function handleMouseEnter() {
		if (animate) return;
		animate = true;

		animateLine(10, 10, 8.5, 11.5, 10, 10, 0.6, 0.2, (y1, y2) => {
			line1Y1 = y1;
			line1Y2 = y2;
		});

		animateLine(10, 10, 8.5, 11.5, 10, 10, 0.6, 0.1, (y1, y2) => {
			line2Y1 = y1;
			line2Y2 = y2;
		});

		animateLine(10, 10, 8.5, 11.5, 10, 10, 0.6, 0, (y1, y2) => {
			line3Y1 = y1;
			line3Y2 = y2;
		});

		setTimeout(() => {
			animate = false;
		}, 800);
	}
</script>

<div class={className} aria-label="message-square-more" role="img" onmouseenter={handleMouseEnter}>
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
		class="message-square-more-icon"
	>
		<g class="message-square-more-group" class:animate>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<line x1="16" y1={line1Y1} x2="16" y2={line1Y2} />
			<line x1="12" y1={line2Y1} x2="12" y2={line2Y2} />
			<line x1="8" y1={line3Y1} x2="8" y2={line3Y2} />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-square-more-icon {
		overflow: visible;
	}

	.message-square-more-group {
		transform-origin: bottom left;
	}

	.message-square-more-group.animate {
		animation: groupRotation 0.8s ease-in-out;
	}

	@keyframes groupRotation {
		0% {
			transform: rotate(0deg);
		}
		40% {
			transform: rotate(8deg);
		}
		60% {
			transform: rotate(-8deg);
		}
		80% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

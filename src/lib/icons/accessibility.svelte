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
		if (!isHovered) {
			isHovered = true;
			setTimeout(() => {
				isHovered = false;
			}, 1400);
		}
	}
</script>

<div class={className} aria-label="accessibility" role="img" onmouseenter={handleMouseEnter}>
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
		class="accessibility-icon"
		class:animate={isHovered}
	>
		<circle cx="16" cy="4" r="1" class="accessibility-circle" />
		<g class="accessibility-group1">
			<path d="M18,19l1-7-6,1" />
			<path d="M8,5l5.5,3-2.4,3.5" />
			<path d="M8 5 L5 8" class="accessibility-path3" />
		</g>
		<g class="accessibility-group2">
			<path d="M4.2,14.5c-.8,2.6.7,5.4,3.3,6.2,1.2.4,2.4.3,3.6-.2" />
			<path d="M13.8,17.5c.8-2.6-.7-5.4-3.3-6.2-1.2-.4-2.4-.3-3.6.2" />
		</g>
		<path d="M13,13.1c-.5-.7-1.1-1.2-1.9-1.6" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.accessibility-icon {
		overflow: visible;
	}

	.accessibility-circle {
		transition: transform 0.3s ease;
	}

	.accessibility-group1 {
		transform-origin: center;
		transition: transform 0.3s ease;
	}

	.accessibility-group2 {
		transform-origin: 9px 16px;
		transition: transform 0.3s ease;
	}

	.accessibility-path3 {
		transform-origin: 8px 5px;
		transition: transform 0.3s ease;
	}

	.accessibility-icon.animate .accessibility-group1 {
		animation: group1Rotate 0.8s ease-in-out;
	}

	.accessibility-icon.animate .accessibility-group2 {
		animation: group2Rotate 1s ease-in-out 0.4s;
	}

	.accessibility-icon.animate .accessibility-path3 {
		animation: path3Rotate 0.4s ease-in-out 0.2s;
	}

	@keyframes group1Rotate {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(5deg);
		}
		50% {
			transform: rotate(-5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes group2Rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes path3Rotate {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(-60deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

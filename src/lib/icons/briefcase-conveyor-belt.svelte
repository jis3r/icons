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
		if (isHovered) return;
		isHovered = true;
		setTimeout(() => {
			isHovered = false;
		}, 800);
	}
</script>

<div
	class={className}
	aria-label="briefcase-conveyor-belt"
	role="img"
	onmouseenter={handleMouseEnter}
>
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
		class="briefcase-conveyor-belt-icon"
		class:animate={isHovered}
	>
		<g class="briefcase-group bg-red-500">
			<path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" class="briefcase-body" />
			<rect x="4" y="6" width="16" height="10" rx="2" class="briefcase-case" />
		</g>
		<path d="M21 20H3" class="belt-line" />
		<path d="M6 20v2" />
		<path d="M10 20v2" />
		<path d="M14 20v2" />
		<path d="M18 20v2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.briefcase-group {
		transform-origin: top center;
		transform-box: fill-box;
	}

	.briefcase-conveyor-belt-icon.animate .briefcase-group {
		animation: swing 0.8s ease-in-out;
	}

	@keyframes swing {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(12deg);
		}
		55% {
			transform: rotate(-10deg);
		}
		85% {
			transform: rotate(3deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

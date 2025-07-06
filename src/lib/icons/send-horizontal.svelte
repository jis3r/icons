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
		}, 1200);
	}
</script>

<div class={className} aria-label="send-horizontal" role="img" onmouseenter={handleMouseEnter}>
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
		class="send-horizontal-icon"
		style="overflow: hidden;"
	>
		<g class:animate-group={isHovered}>
			<path
				d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
				class="path1"
			/>
			<path d="M6 12h16" class="path2" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.send-horizontal-icon {
		overflow: hidden;
	}

	.animate-group {
		transform-origin: center;
		animation: sendAnimation 1.2s ease-in-out;
	}

	@keyframes sendAnimation {
		0% {
			transform: scale(1) translateX(0);
		}
		25% {
			transform: scale(0.8) translateX(-20%);
		}
		50% {
			transform: scale(1) translateX(100%);
		}
		50.1% {
			transform: scale(1) translateX(-125%);
		}
		100% {
			transform: scale(1) translateX(0);
		}
	}
</style>

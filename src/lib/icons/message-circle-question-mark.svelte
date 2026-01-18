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
		}, 800);
	}
</script>

<div
	class={className}
	aria-label="message-circle-question-mark"
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
	>
		<g class="message-circle-question-group" class:animate>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" class="path2" />
			<path d="M12 17h.01" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-circle-question-group {
		transform-origin: bottom left;
	}

	.message-circle-question-group.animate {
		animation: groupRotation 0.8s ease-in-out;
	}

	.path2 {
		transform: translateY(0);
	}

	.message-circle-question-group.animate .path2 {
		animation: path2Animation 0.8s ease-in-out;
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

	@keyframes path2Animation {
		0% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(1px);
		}
		70% {
			transform: translateY(-0.25px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>

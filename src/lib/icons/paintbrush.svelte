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

<div class={className} aria-label="paintbrush" role="img" onmouseenter={handleMouseEnter}>
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
		class="paintbrush-icon"
		class:animate={isHovered}
	>
		<path d="m14.622 17.897-10.68-2.913" />
		<path
			d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
		/>
		<path
			d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.paintbrush-icon {
		transform-origin: top right;
	}

	.paintbrush-icon.animate {
		animation: paintbrushRotation 0.6s ease-in-out;
	}

	@keyframes paintbrushRotation {
		0% {
			transform: rotate(0deg);
		}
		33% {
			transform: rotate(-6deg);
		}
		66% {
			transform: rotate(6deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

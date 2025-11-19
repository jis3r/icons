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
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		class: className = ''
	} = $props();

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={className}
	aria-label="file-sliders"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="lucide lucide-file-sliders-icon lucide-file-sliders"
	>
		<path
			d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
		/>
		<path d="M14 2v5a1 1 0 0 0 1 1h5" />
		<path d="M8 12h8" />
		<path d="M10 11v2" class:animate-line1={isHovered} />
		<path d="M8 17h8" />
		<path d="M14 16v2" class:animate-line2={isHovered} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	path {
		transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.animate-line1 {
		transform: translateX(4px);
	}

	.animate-line2 {
		transform: translateX(-4px);
	}
</style>

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
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={className}
	aria-label="trash-2"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
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
		<g class:is-animated={isHovered}>
			<path d="M3 6h18" />
			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
		</g>
		<path d="M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8" class:animate-path={isHovered} />
		<line x1="10" x2="10" y1="12" y2="17" class:animate-path={isHovered} />
		<line x1="14" x2="14" y1="12" y2="17" class:animate-path={isHovered} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.is-animated {
		transform: translateY(-1px);
		transition: transform 0.2s ease-in;
	}

	.animate-path {
		transform: translateY(1px);
		transition: transform 0.2s ease-in;
	}

	.is-animated-path {
		transition: d 0.2s ease-in;
	}
</style>

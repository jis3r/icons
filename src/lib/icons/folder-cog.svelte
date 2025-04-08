<script>
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="folder-cog"
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
		<path
			d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"
		/>
		<g class="cog-group" class:animate={isHovered}>
			<circle cx="18" cy="18" r="3" />
			<path d="m21.7 19.4-.9-.3" />
			<path d="m15.2 16.9-.9-.3" />
			<path d="m16.6 21.7.3-.9" />
			<path d="m19.1 15.2.3-.9" />
			<path d="m19.6 21.7-.4-1" />
			<path d="m16.8 15.3-.4-1" />
			<path d="m14.3 19.6 1-.4" />
			<path d="m20.7 16.8 1-.4" />
		</g>
	</svg>
</div>

<style>
	.cog-group {
		transform-origin: 18px 18px;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cog-group.animate {
		transform: rotate(180deg);
	}
</style>

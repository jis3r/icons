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
	aria-label="monitor-cog"
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
		<path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
		<path d="M8 21h8" />
		<path d="M12 17v4" />
		<g class="cog-group" class:animate={isHovered}>
			<path d="m15.2 4.9-.9-.4" />
			<path d="m15.2 7.1-.9.4" />
			<path d="m16.9 3.2-.4-.9" />
			<path d="m16.9 8.8-.4.9" />
			<path d="m19.5 2.3-.4.9" />
			<path d="m19.5 9.7-.4-.9" />
			<path d="m21.7 4.5-.9.4" />
			<path d="m21.7 7.5-.9-.4" />
			<circle cx="18" cy="6" r="3" />
		</g>
	</svg>
</div>

<style>
	.cog-group {
		transform-origin: 18px 6px;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cog-group.animate {
		transform: rotate(180deg);
	}
</style>

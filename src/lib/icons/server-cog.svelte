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
	aria-label="server-cog"
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
		<path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
		<path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
		<path d="M6 6h.01" />
		<path d="M6 18h.01" />
		<g class="cog-group" class:animate={isHovered}>
			<circle cx="12" cy="12" r="3" />
			<path d="m15.7 13.4-.9-.3" />
			<path d="m9.2 10.9-.9-.3" />
			<path d="m10.6 15.7.3-.9" />
			<path d="m13.6 15.7-.4-1" />
			<path d="m10.8 9.3-.4-1" />
			<path d="m8.3 13.6 1-.4" />
			<path d="m14.7 10.8 1-.4" />
			<path d="m13.4 8.3-.3.9" />
		</g>
	</svg>
</div>

<style>
	.cog-group {
		transform-origin: 12px 12px;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cog-group.animate {
		transform: rotate(180deg);
	}
</style>

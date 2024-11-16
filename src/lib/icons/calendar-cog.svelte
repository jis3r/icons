<script>
	let {
		color = 'currentColor',
		size = 28,
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
	aria-label="calendar-settings"
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
		class="calendar-cog-icon"
	>
		<path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
		<path d="M16 2v4" />
		<path d="M3 10h18" />
		<path d="M8 2v4" />
		<g class="cog-group" class:animate={isHovered}>
			<path d="m15.2 16.9-.9-.4" />
			<path d="m15.2 19.1-.9.4" />
			<path d="m16.9 15.2-.4-.9" />
			<path d="m16.9 20.8-.4.9" />
			<path d="m19.5 14.3-.4.9" />
			<path d="m19.5 21.7-.4-.9" />
			<path d="m21.7 16.5-.9.4" />
			<path d="m21.7 19.5-.9-.4" />
			<circle cx="18" cy="18" r="3" />
		</g>
	</svg>
</div>

<style>
	.calendar-cog-icon {
		overflow: visible;
	}

	.cog-group {
		transform-origin: 18px 18px;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cog-group.animate {
		transform: rotate(180deg);
	}
</style>

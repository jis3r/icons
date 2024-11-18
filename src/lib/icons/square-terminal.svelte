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
	aria-label="square-terminal"
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
		class="square-terminal-icon"
	>
		<path d="m7 11 2-2-2-2" />
		<path d="M11 13h4" class="cursor-line" class:animate={isHovered} />
		<rect width="18" height="18" x="3" y="3" rx="2" />
	</svg>
</div>

<style>
	.square-terminal-icon {
		overflow: visible;
	}

	.cursor-line {
		opacity: 1;
		transition: opacity 0.8s linear;
	}

	.cursor-line.animate {
		animation: blink 0.8s linear infinite;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>

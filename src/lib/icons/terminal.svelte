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
	aria-label="terminal"
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
		class="terminal-icon"
	>
		<polyline points="4 17 10 11 4 5" />
		<line x1="12" x2="20" y1="19" y2="19" class="cursor-line" class:animate={isHovered} />
	</svg>
</div>

<style>
	.terminal-icon {
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

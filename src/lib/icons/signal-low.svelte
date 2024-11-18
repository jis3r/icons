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

		setTimeout(() => {
			isHovered = false;
		}, 700);
	}
</script>

<div class={classes} aria-label="signal-low" role="img" onmouseenter={handleMouseEnter}>
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
		class="signal-icon"
		class:animate={isHovered}
	>
		<path d="M2 20h.01" />
		<path d="M7 20v-4" class="signal-level signal-line-1" />
	</svg>
</div>

<style>
	.signal-icon {
		overflow: visible;
	}

	.signal-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.signal-icon.animate .signal-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.signal-icon.animate .signal-line-1 {
		opacity: 0;
		animation-delay: 0.25s;
	}

	@keyframes fadeInSequence {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

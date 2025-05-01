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

<div class={classes} aria-label="wifi-pen" role="img" onmouseenter={handleMouseEnter}>
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
		class="wifi-pen-icon"
		class:animate={isHovered}
	>
		<path d="M2 8.82a15 15 0 0 1 20 0" class="wifi-level wifi-line-3" />
		<path
			d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
			class=""
		/>
		<path d="M5 12.859a10 10 0 0 1 10.5-2.222" class="wifi-level wifi-line-2" />
		<path d="M8.5 16.429a5 5 0 0 1 3-1.406" class="wifi-level wifi-line-1" />
	</svg>
</div>

<style>
	.wifi-pen-icon {
		overflow: visible;
	}

	.wifi-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.wifi-pen-icon.animate .wifi-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.wifi-pen-icon.animate .wifi-line-1 {
		opacity: 0;
		animation-delay: 0.25s;
	}

	.wifi-pen-icon.animate .wifi-line-2 {
		opacity: 0;
		animation-delay: 0.35s;
	}

	.wifi-pen-icon.animate .wifi-line-3 {
		opacity: 0;
		animation-delay: 0.45s;
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

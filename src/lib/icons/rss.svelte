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

<div class={classes} aria-label="rss" role="img" onmouseenter={handleMouseEnter}>
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
		class="rss-icon"
		class:animate={isHovered}
	>
		<path d="M4 11a9 9 0 0 1 9 9" class="rss-level rss-line-2" />
		<path d="M4 4a16 16 0 0 1 16 16" class="rss-level rss-line-3" />
		<circle cx="5" cy="19" r="1" class="rss-level rss-line-1" />
	</svg>
</div>

<style>
	.rss-icon {
		overflow: visible;
	}

	.rss-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.rss-icon.animate .rss-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.rss-icon.animate .rss-line-1 {
		opacity: 0;
		animation-delay: 0.25s;
	}

	.rss-icon.animate .rss-line-2 {
		opacity: 0;
		animation-delay: 0.35s;
	}

	.rss-icon.animate .rss-line-3 {
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

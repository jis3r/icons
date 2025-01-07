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

		setTimeout(() => {
			isHovered = false;
		}, 700);
	}
</script>

<div class={classes} aria-label="cast" role="img" onmouseenter={handleMouseEnter}>
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
		class="cast-icon"
		class:animate={isHovered}
	>
		<path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
		<path d="M2 12a9 9 0 0 1 8 8" class="cast-level cast-line-3" />
		<path d="M2 16a5 5 0 0 1 4 4" class="cast-level cast-line-2" />
		<line x1="2" x2="2.01" y1="20" y2="20" class="cast-level cast-line-1" />
	</svg>
</div>

<style>
	.cast-icon {
		overflow: visible;
	}

	.cast-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.cast-icon.animate .cast-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.cast-icon.animate .cast-line-1 {
		opacity: 0;
		animation-delay: 0.25s;
	}

	.cast-icon.animate .cast-line-2 {
		opacity: 0;
		animation-delay: 0.35s;
	}

	.cast-icon.animate .cast-line-3 {
		opacity: 0;
		animation-delay: 0.45s;
	}

	.cast-icon.animate .cast-line-4 {
		opacity: 0;
		animation-delay: 0.55s;
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

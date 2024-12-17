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

<div class={classes} aria-label="radio-tower" role="img" onmouseenter={handleMouseEnter}>
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
		class="radio-tower-icon"
		class:animate={isHovered}
	>
		<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" class="radio-level radio-line-3" />
		<path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" class="radio-level radio-line-2" />
		<circle cx="12" cy="9" r="2" class="radio-level radio-line-1" />
		<path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" class="radio-level radio-line-2" />
		<path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" class="radio-level radio-line-3" />
		<path d="M9.5 18h5" class="tower-base" />
		<path d="m8 22 4-11 4 11" class="tower-base" />
	</svg>
</div>

<style>
	.radio-tower-icon {
		overflow: visible;
	}

	.radio-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.radio-tower-icon.animate .radio-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.radio-tower-icon.animate .radio-line-1 {
		opacity: 0;
		animation-delay: 0.15s;
	}

	.radio-tower-icon.animate .radio-line-2 {
		opacity: 0;
		animation-delay: 0.25s;
	}

	.radio-tower-icon.animate .radio-line-3 {
		opacity: 0;
		animation-delay: 0.35s;
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

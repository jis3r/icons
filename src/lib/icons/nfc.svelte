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

<div class={classes} aria-label="nfc" role="img" onmouseenter={handleMouseEnter}>
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
		class="nfc-icon"
		class:animate={isHovered}
	>
		<path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" class="nfc-level nfc-line-1" />
		<path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" class="nfc-level nfc-line-2" />
		<path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" class="nfc-level nfc-line-3" />
		<path d="M16.37 2a20.16 20.16 0 0 1 0 20" class="nfc-level nfc-line-4" />
	</svg>
</div>

<style>
	.nfc-icon {
		overflow: visible;
	}

	.nfc-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.nfc-icon.animate .nfc-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.nfc-icon.animate .nfc-line-1 {
		opacity: 0;
		animation-delay: 0.25s;
	}

	.nfc-icon.animate .nfc-line-2 {
		opacity: 0;
		animation-delay: 0.35s;
	}

	.nfc-icon.animate .nfc-line-3 {
		opacity: 0;
		animation-delay: 0.45s;
	}

	.nfc-icon.animate .nfc-line-4 {
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

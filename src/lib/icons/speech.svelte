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

<div class={classes} aria-label="speech" role="img" onmouseenter={handleMouseEnter}>
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
		class="speech-icon"
		class:animate={isHovered}
	>
		<path
			d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
			class="speech-bubble"
		/>
		<path d="M17 15a3.5 3.5 0 0 0-.025-4.975" class="speech-level speech-line-1" />
		<path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" class="speech-level speech-line-2" />
	</svg>
</div>

<style>
	.speech-icon {
		overflow: visible;
	}

	.speech-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.speech-icon.animate .speech-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.speech-icon.animate .speech-line-1 {
		opacity: 0;
		animation-delay: 0.25s;
	}

	.speech-icon.animate .speech-line-2 {
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

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
		}, 1000);
	}
</script>

<div class={classes} aria-label="cpu" role="img" onmouseenter={handleMouseEnter}>
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
		class="cpu-icon"
		class:animate={isHovered}
	>
		<rect width="16" height="16" x="4" y="4" rx="2" />
		<rect width="6" height="6" x="9" y="9" rx="1" />
		<path d="M15 2v2" class="vertical-line" />
		<path d="M15 20v2" class="vertical-line" />
		<path d="M2 15h2" class="horizontal-line" />
		<path d="M2 9h2" class="horizontal-line" />
		<path d="M20 15h2" class="horizontal-line" />
		<path d="M20 9h2" class="horizontal-line" />
		<path d="M9 2v2" class="vertical-line" />
		<path d="M9 20v2" class="vertical-line" />
	</svg>
</div>

<style>
	.cpu-icon {
		overflow: visible;
	}

	.vertical-line,
	.horizontal-line {
		transition:
			transform 0.5s ease-in-out,
			opacity 0.5s ease-in-out;
		transform-origin: center;
	}

	.animate .vertical-line {
		animation: scaleYAnimation 0.5s ease-in-out 2;
	}

	.animate .horizontal-line {
		animation: scaleXAnimation 0.5s ease-in-out 2;
	}

	@keyframes scaleYAnimation {
		0% {
			transform: scaleY(1);
			opacity: 1;
		}
		50% {
			transform: scaleY(1.1);
			opacity: 0.8;
		}
		100% {
			transform: scaleY(1);
			opacity: 1;
		}
	}

	@keyframes scaleXAnimation {
		0% {
			transform: scaleX(1);
			opacity: 1;
		}
		50% {
			transform: scaleX(1.1);
			opacity: 0.8;
		}
		100% {
			transform: scaleX(1);
			opacity: 1;
		}
	}
</style>

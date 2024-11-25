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
		}, 400);
	}
</script>

<div class={classes} aria-label="dna-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="dna-off"
		class:animate={isHovered}
	>
		<path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
		<path d="m17 6-2.891-2.891" />
		<path d="M2 15c3.333-3 6.667-3 10-3" />
		<path d="m2 2 20 20" class="line" />
		<path d="m20 9 .891.891" />
		<path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
		<path d="M3.109 14.109 4 15" />
		<path d="m6.5 12.5 1 1" />
		<path d="m7 18 2.891 2.891" />
		<path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
	</svg>
</div>

<style>
	.dna-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.dna-off.animate .line {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.1s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 29;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 29;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

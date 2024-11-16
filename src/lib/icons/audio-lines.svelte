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
	aria-label="audio-lines"
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
		class="audio-lines-icon"
		class:animate={isHovered}
	>
		<path d="M2 10v3" />
		<path d="M6 6v11" class="line line1" />
		<path d="M10 3v18" class="line line2" />
		<path d="M14 8v7" class="line line3" />
		<path d="M18 5v13" class="line line4" />
		<path d="M22 10v3" />
	</svg>
</div>

<style>
	.audio-lines-icon {
		overflow: visible;
	}

	.line {
		transition: d 0.3s ease;
	}

	.audio-lines-icon.animate .line {
		animation-play-state: running;
	}

	.line1 {
		animation: line1Animation 1.5s infinite ease-in-out paused;
	}

	.line2 {
		animation: line2Animation 1s infinite ease-in-out paused;
	}

	.line3 {
		animation: line3Animation 0.8s infinite ease-in-out paused;
	}

	.line4 {
		animation: line4Animation 1.5s infinite ease-in-out paused;
	}

	@keyframes line1Animation {
		0%,
		100% {
			d: path('M6 6v11');
		}
		50% {
			d: path('M6 10v3');
		}
	}

	@keyframes line2Animation {
		0%,
		100% {
			d: path('M10 3v18');
		}
		50% {
			d: path('M10 9v5');
		}
	}

	@keyframes line3Animation {
		0%,
		100% {
			d: path('M14 8v7');
		}
		50% {
			d: path('M14 6v11');
		}
	}

	@keyframes line4Animation {
		0%,
		100% {
			d: path('M18 5v13');
		}
		50% {
			d: path('M18 7v9');
		}
	}
</style>

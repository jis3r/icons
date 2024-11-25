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

<div class={classes} aria-label="bug-off" role="img" onmouseenter={handleMouseEnter}>
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
		class="bug-off"
		class:animate={isHovered}
	>
		<path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
		<path d="M14.12 3.88 16 2" />
		<path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" />
		<path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
		<path d="m2 2 20 20" class="line" />
		<path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
		<path d="M12 20v-8" />
		<path d="M6 13H2" />
		<path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
	</svg>
</div>

<style>
	.bug-off {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 29;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.bug-off.animate .line {
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

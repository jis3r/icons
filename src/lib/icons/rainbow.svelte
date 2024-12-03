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
		}, 800);
	}
</script>

<div class={classes} aria-label="rainbow" role="img" onmouseenter={handleMouseEnter}>
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
		class:animate={isHovered}
	>
		<path d="M22 17a10 10 0 0 0-20 0" class="arc-1" />
		<path d="M18 17a6 6 0 0 0-12 0" class="arc-2" />
		<path d="M14 17a2 2 0 0 0-4 0" class="arc-3" />
	</svg>
</div>

<style>
	.arc-1 {
		fill: none;
		stroke-dasharray: 32;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.4s ease-out;
	}
	.arc-2 {
		fill: none;
		stroke-dasharray: 19;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.4s ease-out;
	}
	.arc-3 {
		fill: none;
		stroke-dasharray: 7;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.4s ease-out;
	}

	.animate .arc-1 {
		animation: draw1 0.8s ease-out forwards;
	}

	.animate .arc-2 {
		animation: draw2 0.8s ease-out forwards;
	}

	.animate .arc-3 {
		animation: draw3 0.8s ease-out forwards;
	}

	@keyframes draw1 {
		0%,
		15% {
			stroke-dashoffset: 32;
		}
		100% {
			stroke-dashoffset: 64;
		}
	}
	@keyframes draw2 {
		0%,
		15% {
			stroke-dashoffset: 19;
		}
		100% {
			stroke-dashoffset: 38;
		}
	}
	@keyframes draw3 {
		0% {
			stroke-dashoffset: 7;
		}
		100% {
			stroke-dashoffset: 14;
		}
	}
</style>

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

<div class={classes} aria-label="waves" role="img" onmouseenter={handleMouseEnter}>
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
		<path
			d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			class="wave wave-1"
		/>
		<path
			d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			class="wave wave-2"
		/>
		<path
			d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			class="wave wave-3"
		/>
	</svg>
</div>

<style>
	.wave {
		fill: none;
		stroke-dasharray: 23;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.4s ease-in-out;
	}

	.animate .wave-1 {
		animation: draw 1s ease-in-out forwards;
	}

	.animate .wave-2 {
		animation: draw 1s ease-in-out forwards;
	}

	.animate .wave-3 {
		animation: draw 1s ease-in-out forwards;
	}

	@keyframes draw {
		0%,
		10% {
			stroke-dashoffset: 23;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}
</style>

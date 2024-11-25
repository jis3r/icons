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

<div class={classes} aria-label="route" role="img" onmouseenter={handleMouseEnter}>
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
		class="route-icon"
		class:animate={isHovered}
	>
		<circle cx="6" cy="19" r="3" class="circle-1" />
		<circle cx="18" cy="5" r="3" class="circle-2" />
		<path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" class="line" />
	</svg>
</div>

<style>
	.line {
		stroke-dasharray: 50;
		stroke-dashoffset: 0;
	}

	.route-icon.animate .circle-1 {
		animation: circle1Animation 0.4s ease-out forwards;
	}

	.route-icon.animate .circle-2 {
		animation: circle2Animation 0.4s ease-out forwards;
	}

	.route-icon.animate .line {
		animation: lineAnimation 0.8s forwards;
	}

	@keyframes circle1Animation {
		0%,
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes circle2Animation {
		0%,
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes lineAnimation {
		0%,
		50% {
			stroke-dashoffset: 50;
		}
		15% {
			stroke-dashoffset: 50;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}
</style>

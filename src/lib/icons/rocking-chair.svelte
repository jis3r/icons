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
		}, 2400);
	}
</script>

<div class={classes} aria-label="rocking chair" role="img" onmouseenter={handleMouseEnter}>
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
		class="rocking-chair-icon"
		class:animate={isHovered}
	>
		<polyline points="3.5 2 6.5 12.5 18 12.5" />
		<line x1="9.5" x2="5.5" y1="12.5" y2="20" />
		<line x1="15" x2="18.5" y1="12.5" y2="20" />
		<path d="M2.75 18a13 13 0 0 0 18.5 0" />
	</svg>
</div>

<style>
	.rocking-chair-icon {
		overflow: visible;
		transform-origin: bottom;
		transition: transform 0.3s ease-in-out;
	}

	.rocking-chair-icon.animate {
		animation: rockingChair 2.4s ease-in-out;
	}

	@keyframes rockingChair {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-5deg);
		}
		40% {
			transform: rotate(5deg);
		}
		60% {
			transform: rotate(-5deg);
		}
		80% {
			transform: rotate(5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

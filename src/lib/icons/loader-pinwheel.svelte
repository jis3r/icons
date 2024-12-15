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
	aria-label="loader-pinwheel"
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
		class="loader-pinwheel-icon"
	>
		<g class="pinwheel" class:animate={isHovered}>
			<path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
			<path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
			<path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
		</g>
		<circle cx="12" cy="12" r="10" />
	</svg>
</div>

<style>
	.loader-pinwheel-icon {
		overflow: visible;
	}

	.pinwheel {
		transform-origin: center;
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.pinwheel.animate {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>

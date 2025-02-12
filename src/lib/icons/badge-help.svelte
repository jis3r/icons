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
	aria-label="badge-help"
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
		class:animate-icon={isHovered}
	>
		<path
			d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
		/>
		<g class:animate-path={isHovered}>
			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
			<line x1="12" x2="12.01" y1="17" y2="17" />
		</g>
	</svg>
</div>

<style>
	.animate-icon {
		transition: transform 0.5s ease-in-out;
	}

	.animate-path {
		transition: transform 0.5s ease-in-out;
		transform-origin: center;
	}

	div:hover .animate-path {
		animation: rotateAnimation 0.5s ease-in-out;
	}

	@keyframes rotateAnimation {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-10deg);
		}
		40% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(-10deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

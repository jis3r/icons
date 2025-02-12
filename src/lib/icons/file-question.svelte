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
	aria-label="file-question"
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
		class="file-question-icon"
		class:animate-icon={isHovered}
	>
		<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
		<g class:animate-path={isHovered}>
			<path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
			<path d="M12 17h.01" />
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

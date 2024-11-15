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
	aria-label="file-pen"
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
		class="file-pen-icon"
	>
		<path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" />
		<path d="M14 2v4a2 2 0 0 0 2 2h4" />
		<path
			d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
			class="pen"
			class:animate={isHovered}
		/>
	</svg>
</div>

<style>
	.file-pen-icon {
		overflow: visible;
	}

	.pen {
		transform-origin: 13.378px 15.626px;
		transition: transform 0.25s ease-in-out;
	}

	.pen.animate {
		animation: penWiggle 0.5s ease-in-out 2;
	}

	@keyframes penWiggle {
		0%,
		100% {
			transform: rotate(0deg) translate(0px, 0px);
		}
		25% {
			transform: rotate(-0.5deg) translate(-1px, 1.5px);
		}
		75% {
			transform: rotate(0.5deg) translate(1.5px, -1px);
		}
	}
</style>

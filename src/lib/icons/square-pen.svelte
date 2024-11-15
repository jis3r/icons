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
	aria-label="square-pen"
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
		class="square-pen-icon"
	>
		<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
		<path
			d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
			class="pen"
			class:animate={isHovered}
		/>
	</svg>
</div>

<style>
	.square-pen-icon {
		overflow: visible;
	}

	.pen {
		transform-origin: 19.875px 4.125px;
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

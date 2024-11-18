<script>
	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();
	const SPEED_LINES = [
		{ x1: 5, y1: 15, x2: 1, y2: 19, delay: 0.1 },
		{ x1: 7, y1: 17, x2: 3, y2: 21, delay: 0.2 },
		{ x1: 9, y1: 19, x2: 5, y2: 23, delay: 0.3 }
	];

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="plane"
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
		class="plane-icon"
		class:animate={isHovered}
	>
		<path
			class="plane"
			d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
		/>
		{#each SPEED_LINES as line, index}
			<line
				x1={line.x1}
				y1={line.y1}
				x2={line.x2}
				y2={line.y2}
				stroke={color}
				stroke-width="1"
				class="speed-line"
				style="--delay: {line.delay}s"
			/>
		{/each}
	</svg>
</div>

<style>
	.plane-icon {
		--x: 0px;
		--y: 0px;
		--scale: 1;
	}

	.plane {
		transform: translate(var(--x), var(--y)) scale(var(--scale));
		transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		transform-origin: center;
	}

	.plane-icon.animate .plane {
		--x: 3px;
		--y: -3px;
		--scale: 0.8;
	}

	.speed-line {
		opacity: 0;
		transform: translate(-3px, 3px);
		transition:
			opacity 0.15s ease,
			transform 0.15s ease;
		transition-delay: var(--delay);
	}

	.plane-icon.animate .speed-line {
		opacity: 1;
		transform: translate(0, 0);
		animation: dash 0.15s ease forwards;
		animation-delay: var(--delay);
	}

	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}

	.speed-line {
		stroke-dasharray: 6;
		stroke-dashoffset: 6;
	}
</style>

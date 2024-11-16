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
	aria-label="unplug"
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
	>
		<path class="line-1" class:animate={isHovered} d="M19 5l3 -3" />
		<path class="line-2" class:animate={isHovered} d="m2 22 3-3" />
		<path
			class="socket"
			class:animate={isHovered}
			d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
		/>
		<path class="spark-1" class:animate={isHovered} d="M7.5 13.5l2.5 -2.5" />
		<path class="spark-2" class:animate={isHovered} d="M10.5 16.5l2.5 -2.5" />
		<path
			class="plug"
			class:animate={isHovered}
			d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
		/>
	</svg>
</div>

<style>
	svg {
		overflow: visible;
	}

	.line-1,
	.line-2,
	.socket,
	.plug,
	.spark-1,
	.spark-2 {
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}

	.line-1.animate {
		d: path('M17 7l5 -5');
	}

	.line-2.animate {
		d: path('m2 22 6-6');
	}

	.socket.animate {
		transform: translate(3px, -3px);
	}

	.plug.animate {
		transform: translate(-3px, 3px);
	}

	.spark-1.animate {
		d: path('M10.43 10.57l0.10 -0.10');
	}

	.spark-2.animate {
		d: path('M13.43 13.57l0.10 -0.10');
	}
</style>

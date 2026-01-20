<script lang="ts">
	import type { IconProps } from './types.js';

	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate = false,
		class: className = ''
	}: IconProps = $props();

	function handleMouseEnter() {
		animate = true;
	}

	function handleMouseLeave() {
		animate = false;
	}
</script>

<div
	class={className}
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
		<g class="line-1" class:animate>
			<path d="M19 5l3 -3" />
		</g>
		<g class="line-2" class:animate>
			<path d="m2 22 3-3" />
		</g>
		<path
			class="socket"
			class:animate
			d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
		/>
		<g class="spark-1" class:animate>
			<path d="M7.5 13.5l2.5 -2.5" />
		</g>
		<g class="spark-2" class:animate>
			<path d="M10.5 16.5l2.5 -2.5" />
		</g>
		<path
			class="plug"
			class:animate
			d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	svg {
		overflow: visible;
	}

	.line-1,
	.line-2,
	.socket,
	.plug,
	.spark-1,
	.spark-2 {
		transition:
			transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
			opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}

	.line-1.animate {
		transform: translate(-2px, 2px);
	}

	.line-2.animate {
		transform: translate(3px, -3px);
	}

	.socket.animate {
		transform: translate(3px, -3px);
	}

	.plug.animate {
		transform: translate(-2px, 2px);
	}

	.spark-1.animate,
	.spark-2.animate {
		transform: translate(3px, -3px);
		opacity: 0;
	}
</style>

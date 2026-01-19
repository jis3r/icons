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
	aria-label="clock-8"
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
		<circle cx="12" cy="12" r="10" />
		<line x1="12" y1="6" x2="12" y2="12" class="minute-hand" class:animate />
		<line x1="12" y1="12" x2="8" y2="14" class="hour-hand" class:animate />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.minute-hand,
	.hour-hand {
		transform-origin: center;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.hour-hand {
		transition-duration: 0.5s;
		transition-timing-function: ease-in-out;
	}

	.minute-hand.animate {
		transform: rotate(360deg);
	}

	.hour-hand.animate {
		transform: rotate(27deg);
	}
</style>

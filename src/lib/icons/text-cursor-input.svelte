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
	aria-label="text-cursor-input"
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
		class="text-cursor-input-icon"
	>
		<path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
		<path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
		<g class="animated-group" class:animate>
			<path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" />
			<path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" />
			<path d="M9 7v10" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.text-cursor-input-icon {
		overflow: visible;
	}

	.animated-group.animate {
		animation: blink 0.8s linear infinite;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>

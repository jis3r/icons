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
		if (animate) return;
		animate = true;
		setTimeout(() => {
			animate = false;
		}, 800);
	}
</script>

<div
	class={className}
	aria-label="message-square-dashed"
	role="img"
	onmouseenter={handleMouseEnter}
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
		class:animate
	>
		<g class="message-square-dashed-group">
			<path d="M5 3a2 2 0 0 0-2 2" class="message-square-dashed-path1" />
			<path d="M9 3h1" class="message-square-dashed-path2" />
			<path d="M14 3h1" class="message-square-dashed-path3" />
			<path d="M19 3a2 2 0 0 1 2 2" class="message-square-dashed-path4" />
			<path d="M21 9v1" class="message-square-dashed-path5" />
			<path d="M21 14v1a2 2 0 0 1-2 2" class="message-square-dashed-path6" />
			<path d="M14 17h1" class="message-square-dashed-path7" />
			<path d="M10 17H7l-4 4v-7" class="message-square-dashed-path8" />
			<path d="M3 9v1" class="message-square-dashed-path9" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-square-dashed-group {
		transform-origin: bottom left;
	}

	.animate .message-square-dashed-group {
		animation: messageSquareDashedGroupAnimation 0.8s ease-in-out;
	}

	@keyframes messageSquareDashedGroupAnimation {
		0% {
			transform: rotate(0deg);
		}
		40% {
			transform: rotate(8deg);
		}
		60% {
			transform: rotate(-8deg);
		}
		80% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

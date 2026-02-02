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
	aria-label="message-circle-dashed"
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
		<g class="message-circle-dashed-group">
			<path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" class="message-circle-dashed-path1" />
			<path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" class="message-circle-dashed-path2" />
			<path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" class="message-circle-dashed-path3" />
			<path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" class="message-circle-dashed-path4" />
			<path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" class="message-circle-dashed-path5" />
			<path d="M3.5 17.5 2 22l4.5-1.5" class="message-circle-dashed-path6" />
			<path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" class="message-circle-dashed-path7" />
			<path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" class="message-circle-dashed-path8" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-circle-dashed-group {
		transform-origin: bottom left;
	}

	.animate .message-circle-dashed-group {
		animation: messageCircleDashedGroupAnimation 0.8s ease-in-out;
	}

	@keyframes messageCircleDashedGroupAnimation {
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

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

<div class={className} aria-label="message-circle-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="message-circle-x-icon"
	>
		<g class="message-circle-x-group" class:animate>
			<path
				d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
			/>
			<path d="m15 9-6 6" class="diagonal-1" />
			<path d="m9 9 6 6" class="diagonal-2" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-circle-x-icon {
		overflow: visible;
	}

	.message-circle-x-group {
		transform-origin: bottom left;
	}

	.message-circle-x-group.animate {
		animation: messageCircleAnimation 0.8s ease-in-out;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 8.5;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.message-circle-x-group.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.message-circle-x-group.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes messageCircleAnimation {
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

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 8.5;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 8.5;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

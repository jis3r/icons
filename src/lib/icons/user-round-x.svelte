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
		}, 600);
	}
</script>

<div class={className} aria-label="user-round-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="user-round-x-icon"
		class:animate
	>
		<path d="M2 21a8 8 0 0 1 11.873-7" class="user-round-path" />
		<circle cx="10" cy="8" r="5" class="user-round-circle" />
		<path d="m22 17-5 5" class="diagonal-1" />
		<path d="m17 17 5 5" class="diagonal-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.user-round-x-icon {
		overflow: visible;
	}

	.user-round-path,
	.user-round-circle {
		transition: transform 0.6s ease-in-out;
	}

	.user-round-x-icon.animate .user-round-path {
		animation: pathBounce 0.6s ease-in-out;
	}

	.user-round-x-icon.animate .user-round-circle {
		animation: circleBounce 0.6s ease-in-out;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 7.1;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.user-round-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.user-round-x-icon.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes pathBounce {
		0% {
			transform: translateY(0);
		}
		33% {
			transform: translateY(4px);
		}
		66% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes circleBounce {
		0% {
			transform: translateY(0);
		}
		33% {
			transform: translateY(1px);
		}
		66% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 7.1;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 7.1;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

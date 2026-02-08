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
		}, 1000);
	}
</script>

<div class={className} aria-label="user-pen" role="img" onmouseenter={handleMouseEnter}>
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
		class="user-pen-icon"
		class:animate
	>
		<path d="M11.5 15H7a4 4 0 0 0-4 4v2" class="user-path" />
		<path
			d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
			class="pen"
			class:animate
		/>
		<circle cx="10" cy="7" r="4" class="user-circle" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.user-pen-icon {
		overflow: visible;
	}

	.pen {
		transform-origin: 21.378px 16.626px;
		transition: transform 0.25s ease-in-out;
	}

	.pen.animate {
		animation: penWiggle 0.5s ease-in-out 2;
	}

	.user-path,
	.user-circle {
		transition: transform 0.6s ease-in-out;
	}

	.user-pen-icon.animate .user-path {
		animation: pathBounce 0.6s ease-in-out;
	}

	.user-pen-icon.animate .user-circle {
		animation: circleBounce 0.6s ease-in-out;
	}

	@keyframes pathBounce {
		0% {
			transform: translateY(0);
		}
		33% {
			transform: translateY(2px);
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
			transform: translateY(4px);
		}
		66% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
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

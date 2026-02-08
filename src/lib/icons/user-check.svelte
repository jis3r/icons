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

<div class={className} aria-label="user-check" role="img" onmouseenter={handleMouseEnter}>
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
		class="user-check-icon"
		class:animate
	>
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" class="user-path" />
		<circle cx="9" cy="7" r="4" class="user-circle" />
		<polyline points="16 11 18 13 22 9" class="check-path" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.user-check-icon {
		overflow: visible;
	}
	.check-path {
		stroke-dasharray: 9;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.125s ease-out,
			opacity 0.125s ease-out;
	}
	.user-check-icon.animate .check-path {
		animation: checkAnimation 0.5s ease-out backwards;
	}
	.user-path,
	.user-circle {
		transition: transform 0.6s ease-in-out;
	}

	.user-check-icon.animate .user-path {
		animation: pathBounce 0.6s ease-in-out;
	}

	.user-check-icon.animate .user-circle {
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

	@keyframes checkAnimation {
		0% {
			stroke-dashoffset: 9;
			opacity: 0;
		}
		33% {
			stroke-dashoffset: 9;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

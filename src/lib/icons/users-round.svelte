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
		}, 700);
	}
</script>

<div class={className} aria-label="users-round" role="img" onmouseenter={handleMouseEnter}>
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
		class="users-round-icon"
		class:animate
	>
		<path d="M18 21a8 8 0 0 0-16 0" class="users-round-path1" />
		<circle cx="10" cy="8" r="5" class="users-round-circle" />
		<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" class="users-round-path2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.users-round-path1,
	.users-round-path2,
	.users-round-circle {
		transition: transform 0.6s ease-in-out;
	}

	.users-round-icon.animate .users-round-path1 {
		animation: path1Bounce 0.6s ease-in-out;
		animation-delay: 0.1s;
	}

	.users-round-icon.animate .users-round-path2 {
		animation: path2Bounce 0.6s ease-in-out;
	}

	.users-round-icon.animate .users-round-circle {
		animation: circleBounce 0.6s ease-in-out;
		animation-delay: 0.1s;
	}

	@keyframes path1Bounce {
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

	@keyframes path2Bounce {
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
</style>

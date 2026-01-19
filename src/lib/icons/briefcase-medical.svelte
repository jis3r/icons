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

<div class={className} aria-label="briefcase-medical" role="img" onmouseenter={handleMouseEnter}>
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
		class="briefcase-medical-icon"
		class:animate
	>
		<path d="M12 11v4" />
		<path d="M14 13h-4" />
		<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
		<path d="M18 6v14" />
		<path d="M6 6v14" />
		<rect width="20" height="14" x="2" y="6" rx="2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.briefcase-medical-icon {
		transform-origin: top center;
		transform-box: fill-box;
	}

	.briefcase-medical-icon.animate {
		animation: swing 0.8s ease-in-out;
	}

	@keyframes swing {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(12deg);
		}
		55% {
			transform: rotate(-10deg);
		}
		85% {
			transform: rotate(3deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

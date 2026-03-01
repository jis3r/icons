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

<div class={className} aria-label="monitor-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="monitor-x-icon"
		class:animate
	>
		<path d="M14.5 7.5l-5 5" class="diagonal-1" />
		<path d="M9.5 7.5l5 5" class="diagonal-2" />
		<rect width="20" height="14" x="2" y="3" rx="2" />
		<path d="M12 17v4" />
		<path d="M8 21h8" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.monitor-x-icon {
		overflow: visible;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 8;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.monitor-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.monitor-x-icon.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 8;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 8;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

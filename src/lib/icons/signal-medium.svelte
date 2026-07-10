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
		}, 900);
	}
</script>

<div class={className} aria-label="signal-medium" role="img" onmouseenter={handleMouseEnter}>
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
		class="signal-medium-icon"
		class:animate
	>
		<g class="signal-medium-group">
			<path d="M2 20h.01" class="signal-medium-path1" />
			<path d="M7 20v-4" class="signal-medium-path2" />
			<path d="M12 20v-8" class="signal-medium-path3" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.signal-medium-icon {
		overflow: visible;
	}

	.signal-medium-path1,
	.signal-medium-path2,
	.signal-medium-path3 {
		opacity: 1;
		stroke-dasharray: 1;
		stroke-dashoffset: 0;
	}

	.signal-medium-path1 {
		stroke-dasharray: 0.5;
	}

	.signal-medium-path2 {
		stroke-dasharray: 4;
	}

	.signal-medium-path3 {
		stroke-dasharray: 8;
	}

	.animate .signal-medium-path1 {
		opacity: 0;
		stroke-dashoffset: 0.5;
		animation: signalMediumPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0s;
	}

	.animate .signal-medium-path2 {
		opacity: 0;
		stroke-dashoffset: 4;
		animation: signalMediumPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.2s;
	}

	.animate .signal-medium-path3 {
		opacity: 0;
		stroke-dashoffset: 8;
		animation: signalMediumPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.4s;
	}

	@keyframes signalMediumPathAnimation {
		0% {
			opacity: 0;
		}
		1% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

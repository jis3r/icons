<script lang="ts">
	import type { IconProps } from './types.js';

	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate: animateProp = false,
		class: className = ''
	}: IconProps = $props();

	let hoverAnimate = $state(false);
	let resetTimer: ReturnType<typeof setTimeout> | undefined;
	const animate = $derived(animateProp || hoverAnimate);

	function handleMouseEnter() {
		if (animate) return;
		hoverAnimate = true;
		resetTimer = setTimeout(() => {
			hoverAnimate = false;
		}, 700);
	}

	$effect(() => () => clearTimeout(resetTimer));
</script>

<div class={className} aria-label="signal-low" role="img" onmouseenter={handleMouseEnter}>
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
		class="signal-low-icon"
		class:animate
	>
		<g class="signal-low-group">
			<path d="M2 20h.01" class="signal-low-path1" />
			<path d="M7 20v-4" class="signal-low-path2" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.signal-low-icon {
		overflow: visible;
	}

	.signal-low-path1,
	.signal-low-path2 {
		opacity: 1;
		stroke-dasharray: 1;
		stroke-dashoffset: 0;
	}

	.signal-low-path1 {
		stroke-dasharray: 0.5;
	}

	.signal-low-path2 {
		stroke-dasharray: 4;
	}

	.animate .signal-low-path1 {
		opacity: 0;
		stroke-dashoffset: 0.5;
		animation: signalLowPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0s;
	}

	.animate .signal-low-path2 {
		opacity: 0;
		stroke-dashoffset: 4;
		animation: signalLowPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.2s;
	}

	@keyframes signalLowPathAnimation {
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

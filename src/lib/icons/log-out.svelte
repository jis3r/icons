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
		}, 600);
	}

	$effect(() => () => clearTimeout(resetTimer));
</script>

<div class={className} aria-label="log-out" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="log-out-group">
			<polyline points="16 17 21 12 16 7" class="log-out-path1" />
			<line x1="21" x2="9" y1="12" y2="12" class="log-out-path2" />
		</g>
		<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" class="log-out-path3" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.log-out-group {
		transform: translateX(0);
		transition: transform 0.3s ease-in-out;
	}

	.animate .log-out-group {
		animation: logOutGroupAnimation 0.6s ease-in-out;
	}

	@keyframes logOutGroupAnimation {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(2px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>

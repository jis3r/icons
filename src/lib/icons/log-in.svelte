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

<div class={className} aria-label="log-in" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="log-in-group">
			<path d="m10 17 5-5-5-5" class="log-in-path1" />
			<path d="M15 12H3" class="log-in-path2" />
		</g>
		<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" class="log-in-path3" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.log-in-group {
		transform: translateX(0);
		transition: transform 0.3s ease-in-out;
	}

	.animate .log-in-group {
		animation: logInGroupAnimation 0.6s ease-in-out;
	}

	@keyframes logInGroupAnimation {
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

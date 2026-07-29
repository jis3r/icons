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
		resetTimer = setTimeout(() => (hoverAnimate = false), 200);
	}

	$effect(() => () => clearTimeout(resetTimer));
</script>

<div class={className} aria-label="arrow-big-down" role="img" onmouseenter={handleMouseEnter}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class:animate
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M15 6v6h4l-7 7-7-7h4V6h6z" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	svg {
		transition: transform 0.2s ease-out;
	}
	.animate {
		transform: translateY(3px);
	}
</style>

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
		}, 200);
	}

	$effect(() => () => clearTimeout(resetTimer));
</script>

<div class={className} aria-label="arrow-down-left" role="img" onmouseenter={handleMouseEnter}>
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
	>
		<path d="M17 17H7V7" class:head={animate} />
		<path d="M7 17 L12 12" class:head={animate} />
		<path d="M17 7 L12 12" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	path {
		transition: all 0.2s ease-out;
	}
	.head {
		transform: translate(3px, -3px);
	}
</style>

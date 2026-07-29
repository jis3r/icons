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

<div class={className} aria-label="chevrons-right-left" role="img" onmouseenter={handleMouseEnter}>
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
		class="chevrons-right-left-icon"
	>
		<path d="m20 17-5-5 5-5" class:chevron-left={animate} />
		<path d="m4 17 5-5-5-5" class:chevron-right={animate} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.chevrons-right-left-icon {
		overflow: visible;
	}

	.chevrons-right-left-icon path {
		transition: all 0.2s ease-in;
	}

	.chevron-left {
		transform: translateX(-3px);
	}

	.chevron-right {
		transform: translateX(3px);
	}
</style>

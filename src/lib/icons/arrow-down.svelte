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
		}, 200);
	}
</script>

<div class={className} aria-label="arrow-down" role="img" onmouseenter={handleMouseEnter}>
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
		<path d="m5 12 7 7 7-7" class:head={animate} />
		<path d="M12 14v5" class:head={animate} />
		<path d="M12 5v9" />
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
		transform: translateY(-3px);
	}
</style>

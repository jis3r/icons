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
		}, 300);
	}
</script>

<div class={className} aria-label="panel-right" role="img" onmouseenter={handleMouseEnter}>
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
		<rect width="18" height="18" x="3" y="3" rx="2" />
		<path d="M15 3v18" class:line={animate} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	path {
		transition: all 0.2s ease-in;
	}

	.line {
		transform: translateX(2px);
		transition-delay: 0.05s;
	}
</style>

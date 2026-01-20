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
		animate = true;
	}

	function handleMouseLeave() {
		animate = false;
	}
</script>

<div
	class={className}
	aria-label="images"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
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
		<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" class="images-path-1" class:animate />
		<path
			d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"
			class="images-path-2"
			class:animate
		/>
		<circle cx="13" cy="7" r="1" fill="currentColor" class="images-circle" class:animate />
		<rect x="8" y="2" width="14" height="14" rx="2" class="images-rect" class:animate />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.images-path-1,
	.images-path-2,
	.images-circle,
	.images-rect {
		transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.images-path-1.animate {
		transform: translate(-3px, 3px);
	}

	.images-path-2.animate {
		transform: translate(3px, -3px);
	}

	.images-circle.animate {
		transform: translate(-3px, 3px);
	}

	.images-rect.animate {
		transform: translate(-3px, 3px);
	}

	svg {
		overflow: visible;
	}
</style>

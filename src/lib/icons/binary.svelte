<script lang="ts">
	import type { IconProps } from './types.js';

	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate = false,
		class: className = ''
	}: IconProps = $props();

	let hovered = $state(false);

	function handleMouseEnter() {
		hovered = true;
	}

	function handleMouseLeave() {
		hovered = false;
	}
</script>

<div
	class={className}
	aria-label="binary"
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
		class="binary-icon"
		class:animate={hovered}
	>
		<rect x={14} y={14} width={4} height={6} rx={2} class="binary-rect1" />
		<rect x={6} y={4} width={4} height={6} rx={2} class="binary-rect2" />
		<path d="M6 20h4 M6 14h2v6" class="binary-path1" />
		<path d="M14 4h2v6 M14 10h4" class="binary-path2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.binary-icon {
		overflow: visible;
	}

	.binary-rect1,
	.binary-rect2,
	.binary-path1,
	.binary-path2 {
		--duration: 0.25s;
		--timing: cubic-bezier(0.34, 1.56, 0.64, 1);
		transition: transform var(--duration) var(--timing);
	}

	.binary-icon.animate .binary-rect1,
	.binary-icon.animate .binary-rect2,
	.binary-icon.animate .binary-path1,
	.binary-icon.animate .binary-path2 {
		--duration: 0.4s;
		--timing: ease-in-out;
	}

	.binary-icon.animate .binary-rect1 {
		transform: translateX(-8px);
	}

	.binary-icon.animate .binary-rect2 {
		transform: translateX(8px);
	}

	.binary-icon.animate .binary-path1 {
		transform: translateY(-10px);
	}

	.binary-icon.animate .binary-path2 {
		transform: translateY(10px);
	}
</style>

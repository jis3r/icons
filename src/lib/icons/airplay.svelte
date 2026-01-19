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
	aria-label="airplay"
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
		class="airplay-icon"
	>
		<path
			d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
			class="airplay-path1"
		/>
		<path d="m12 15 5 6H7Z" class="airplay-path2" class:hovered={animate} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.airplay-icon {
		overflow: visible;
	}

	.airplay-path2 {
		transform: translateY(0);
		transition: transform 0.4s cubic-bezier(0, 0, 0.3, 1.6);
	}

	.airplay-path2.hovered {
		transform: translateY(2px);
	}
</style>

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
	aria-label="unfold-horizontal"
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
		class="unfold-horizontal-icon"
	>
		<path d="M12 2v2 M12 8v2 M12 14v2 M12 20v2" />
		<g class:move-left={animate}>
			<path d="M8 12H2" />
			<path d="m5 9-3 3 3 3" />
		</g>
		<g class:move-right={animate}>
			<path d="M16 12h6" />
			<path d="m19 15 3-3-3-3" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.unfold-horizontal-icon {
		overflow: visible;
	}
	.unfold-horizontal-icon g {
		transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.move-left {
		transform: translateX(-2px);
	}
	.move-right {
		transform: translateX(2px);
	}
</style>

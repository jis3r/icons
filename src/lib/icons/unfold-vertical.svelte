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
	aria-label="unfold-vertical"
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
		class="unfold-vertical-icon"
	>
		<path d="M4 12H2 M10 12H8 M16 12h-2 M22 12h-2" />
		<g class:move-up={animate}>
			<path d="M12 8V2" />
			<path d="m15 5-3-3-3 3" />
		</g>
		<g class:move-down={animate}>
			<path d="M12 22v-6" />
			<path d="m15 19-3 3-3-3" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.unfold-vertical-icon {
		overflow: visible;
	}
	.unfold-vertical-icon g {
		transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.move-up {
		transform: translateY(-2px);
	}
	.move-down {
		transform: translateY(2px);
	}
</style>

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
	aria-label="user-round-cog"
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
		<path d="M2 21a8 8 0 0 1 10.434-7.62" />
		<circle cx="10" cy="8" r="5" />
		<g class="cog-group" class:animate>
			<circle cx="18" cy="18" r="3" />
			<path d="m19.5 14.3-.4.9" />
			<path d="m16.9 20.8-.4.9" />
			<path d="m21.7 19.5-.9-.4" />
			<path d="m15.2 16.9-.9-.4" />
			<path d="m21.7 16.5-.9.4" />
			<path d="m15.2 19.1-.9.4" />
			<path d="m19.5 21.7-.4-.9" />
			<path d="m16.9 15.2-.4-.9" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.cog-group {
		transform-origin: 18px 18px;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cog-group.animate {
		transform: rotate(180deg);
	}
</style>

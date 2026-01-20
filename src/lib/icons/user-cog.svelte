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
	aria-label="user-cog"
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
		<g class="cog-group" class:animate>
			<circle cx="18" cy="15" r="3" />
			<path d="m21.7 16.4-.9-.3" />
			<path d="m15.2 13.9-.9-.3" />
			<path d="m16.6 18.7.3-.9" />
			<path d="m19.1 12.2.3-.9" />
			<path d="m19.6 18.7-.4-1" />
			<path d="m16.8 12.3-.4-1" />
			<path d="m14.3 16.6 1-.4" />
			<path d="m20.7 13.8 1-.4" />
		</g>
		<circle cx="9" cy="7" r="4" />
		<path d="M10 15H6a4 4 0 0 0-4 4v2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.cog-group {
		transform-origin: 18px 15px;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cog-group.animate {
		transform: rotate(180deg);
	}
</style>

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
	aria-label="cloud-cog"
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
		<path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
		<g class="cog-group" class:animate>
			<circle cx="12" cy="17" r="3" />
			<path d="m15.7 18.4-.9-.3" />
			<path d="m9.2 15.9-.9-.3" />
			<path d="m10.6 20.7.3-.9" />
			<path d="m13.1 14.2.3-.9" />
			<path d="m13.6 20.7-.4-1" />
			<path d="m10.8 14.3-.4-1" />
			<path d="m8.3 18.6 1-.4" />
			<path d="m14.7 15.8 1-.4" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.cog-group {
		transform-origin: 12px 17px;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cog-group.animate {
		transform: rotate(180deg);
	}
</style>

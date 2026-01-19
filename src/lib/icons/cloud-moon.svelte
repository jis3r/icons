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
		}, 1400);
	}
</script>

<div class={className} aria-label="cloud-moon" role="img" onmouseenter={handleMouseEnter}>
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
		class="cloud-moon-icon"
		class:animate
	>
		<path d="M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z" class="cloud-moon-path1" />
		<path
			d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"
			class="cloud-moon-path2"
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.cloud-moon-icon {
		overflow: visible;
	}

	.cloud-moon-path1 {
		transform: translate(0, 0);
		transition: transform 0.1s ease-in-out;
	}

	.cloud-moon-path2 {
		transform: rotate(0deg);
		transform-origin: center;
		transition: transform 0.1s ease-in-out;
	}

	.cloud-moon-icon.animate .cloud-moon-path1 {
		animation: cloudMoonPath1 1.4s ease-in-out forwards;
	}

	.cloud-moon-icon.animate .cloud-moon-path2 {
		animation: cloudMoonPath2 1.4s ease-in-out forwards;
	}

	@keyframes cloudMoonPath1 {
		0% {
			transform: translate(0, 0);
		}
		33.33% {
			transform: translate(-1px, -1px);
		}
		66.66% {
			transform: translate(1px, 1px);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	@keyframes cloudMoonPath2 {
		0% {
			transform: rotate(0deg);
		}
		33.33% {
			transform: rotate(6deg);
		}
		66.66% {
			transform: rotate(-8deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

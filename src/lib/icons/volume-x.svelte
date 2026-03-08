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
		}, 600);
	}
</script>

<div class={className} aria-label="volume-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="volume-x-icon"
		class:animate
	>
		<path
			d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
		/>
		<line x1="22" x2="16" y1="9" y2="15" class="diagonal-1" />
		<line x1="16" x2="22" y1="9" y2="15" class="diagonal-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.volume-x-icon {
		overflow: visible;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 8.5;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.volume-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.volume-x-icon.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 8.5;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 8.5;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

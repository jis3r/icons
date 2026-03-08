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

<div class={className} aria-label="package-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="package-x-icon"
		class:animate
	>
		<path
			d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
		/>
		<path d="m7.5 4.27 9 5.15" />
		<polyline points="3.29 7 12 12 20.71 7" />
		<line x1="12" x2="12" y1="22" y2="12" />
		<path d="m22 13-5 5" class="diagonal-1" />
		<path d="m17 13 5 5" class="diagonal-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.package-x-icon {
		overflow: visible;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 7.1;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.package-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.package-x-icon.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 7.1;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 7.1;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

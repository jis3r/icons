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
		}, 700);
	}
</script>

<div class={className} aria-label="file-text" role="img" onmouseenter={handleMouseEnter}>
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
		class="file-text-icon"
		class:animate
	>
		<path
			d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
		/>
		<path d="M14 2v5a1 1 0 0 0 1 1h5" />
		<path d="M8 9h2" class="text-line text-line-1" />
		<path d="M8 13h8" class="text-line text-line-2" />
		<path d="M8 17h8" class="text-line text-line-3" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.file-text-icon {
		overflow: visible;
	}

	.text-line {
		stroke-dasharray: 12;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.file-text-icon.animate .text-line {
		animation: textLineAnimation 0.6s ease forwards;
	}

	.file-text-icon.animate .text-line-1 {
		animation-delay: 0s;
	}

	.file-text-icon.animate .text-line-2 {
		animation-delay: 0.1s;
	}

	.file-text-icon.animate .text-line-3 {
		animation-delay: 0.2s;
	}

	@keyframes textLineAnimation {
		0% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
		50% {
			stroke-dashoffset: 12;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

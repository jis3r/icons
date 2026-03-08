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

<div class={className} aria-label="file-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="file-x-icon"
		class:animate
	>
		<path
			d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
		/>
		<path d="M14 2v5a1 1 0 0 0 1 1h5" />
		<path d="m14.5 12.5-5 5" class="diagonal-1" />
		<path d="m9.5 12.5 5 5" class="diagonal-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.file-x-icon {
		overflow: visible;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 7.5;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.file-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.file-x-icon.animate .diagonal-2 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 7.5;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 7.5;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

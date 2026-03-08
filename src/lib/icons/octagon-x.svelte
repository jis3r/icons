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

<div class={className} aria-label="octagon-x" role="img" onmouseenter={handleMouseEnter}>
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
		class="octagon-x-icon"
		class:animate
	>
		<path
			d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
		/>
		<path d="m15 9-6 6" class="diagonal-1" />
		<path d="m9 9 6 6" class="diagonal-2" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.octagon-x-icon {
		overflow: visible;
	}

	.diagonal-1,
	.diagonal-2 {
		stroke-dasharray: 8.5;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.octagon-x-icon.animate .diagonal-1 {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.octagon-x-icon.animate .diagonal-2 {
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

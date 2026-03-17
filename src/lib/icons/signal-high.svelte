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
		}, 1200);
	}
</script>

<div class={className} aria-label="signal-high" role="img" onmouseenter={handleMouseEnter}>
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
		class="signal-high-icon"
		class:animate
	>
		<g class="signal-high-group">
			<path d="M2 20h.01" class="signal-high-path1" />
			<path d="M7 20v-4" class="signal-high-path2" />
			<path d="M12 20v-8" class="signal-high-path3" />
			<path d="M17 20V8" class="signal-high-path4" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.signal-high-icon {
		overflow: visible;
	}

	.signal-high-path1,
	.signal-high-path2,
	.signal-high-path3,
	.signal-high-path4 {
		opacity: 1;
		stroke-dasharray: 1;
		stroke-dashoffset: 0;
	}

	.signal-high-path1 {
		stroke-dasharray: 0.5;
	}

	.signal-high-path2 {
		stroke-dasharray: 4;
	}

	.signal-high-path3 {
		stroke-dasharray: 8;
	}

	.signal-high-path4 {
		stroke-dasharray: 12;
	}

	.animate .signal-high-path1 {
		opacity: 0;
		stroke-dashoffset: 0.5;
		animation: signalHighPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0s;
	}

	.animate .signal-high-path2 {
		opacity: 0;
		stroke-dashoffset: 4;
		animation: signalHighPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.2s;
	}

	.animate .signal-high-path3 {
		opacity: 0;
		stroke-dashoffset: 8;
		animation: signalHighPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.4s;
	}

	.animate .signal-high-path4 {
		opacity: 0;
		stroke-dashoffset: 12;
		animation: signalHighPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.6s;
	}

	@keyframes signalHighPathAnimation {
		0% {
			opacity: 0;
		}
		1% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

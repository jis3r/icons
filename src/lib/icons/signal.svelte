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
		}, 1500);
	}
</script>

<div class={className} aria-label="signal" role="img" onmouseenter={handleMouseEnter}>
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
		class="signal-icon"
		class:animate
	>
		<g class="signal-group">
			<path d="M2 20h.01" class="signal-path1" />
			<path d="M7 20v-4" class="signal-path2" />
			<path d="M12 20v-8" class="signal-path3" />
			<path d="M17 20V8" class="signal-path4" />
			<path d="M22 20V4" class="signal-path5" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.signal-icon {
		overflow: visible;
	}

	.signal-path1,
	.signal-path2,
	.signal-path3,
	.signal-path4,
	.signal-path5 {
		opacity: 1;
		stroke-dasharray: 1;
		stroke-dashoffset: 0;
	}

	.signal-path1 {
		stroke-dasharray: 0.5;
	}

	.signal-path2 {
		stroke-dasharray: 4;
	}

	.signal-path3 {
		stroke-dasharray: 8;
	}

	.signal-path4 {
		stroke-dasharray: 12;
	}

	.signal-path5 {
		stroke-dasharray: 16;
	}

	.animate .signal-path1 {
		opacity: 0;
		stroke-dashoffset: 0.5;
		animation: signalPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0s;
	}

	.animate .signal-path2 {
		opacity: 0;
		stroke-dashoffset: 4;
		animation: signalPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.2s;
	}

	.animate .signal-path3 {
		opacity: 0;
		stroke-dashoffset: 8;
		animation: signalPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.4s;
	}

	.animate .signal-path4 {
		opacity: 0;
		stroke-dashoffset: 12;
		animation: signalPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.6s;
	}

	.animate .signal-path5 {
		opacity: 0;
		stroke-dashoffset: 16;
		animation: signalPathAnimation 0.3s ease-in-out forwards;
		animation-delay: 0.8s;
	}

	@keyframes signalPathAnimation {
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

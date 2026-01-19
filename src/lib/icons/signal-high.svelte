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
		class="signal-icon"
		class:animate
	>
		<path d="M2 20h.01" />
		<path d="M7 20v-4" class="signal-level signal-line-1" />
		<path d="M12 20v-8" class="signal-level signal-line-2" />
		<path d="M17 20V8" class="signal-level signal-line-3" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.signal-icon {
		overflow: visible;
	}

	.signal-level {
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.signal-icon.animate .signal-level {
		animation: fadeInSequence 0.6s ease forwards;
	}

	.signal-icon.animate .signal-line-1 {
		opacity: 0;
		animation-delay: 0.1s;
	}

	.signal-icon.animate .signal-line-2 {
		opacity: 0;
		animation-delay: 0.2s;
	}

	.signal-icon.animate .signal-line-3 {
		opacity: 0;
		animation-delay: 0.3s;
	}

	@keyframes fadeInSequence {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

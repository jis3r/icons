<script lang="ts">
	import type { IconProps } from './types.js';

	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate: animateProp = false,
		class: className = ''
	}: IconProps = $props();

	let hoverAnimate = $state(false);
	let resetTimer: ReturnType<typeof setTimeout> | undefined;
	const animate = $derived(animateProp || hoverAnimate);

	function handleMouseEnter() {
		if (animate) return;
		hoverAnimate = true;
		resetTimer = setTimeout(() => {
			hoverAnimate = false;
		}, 800);
	}

	$effect(() => () => clearTimeout(resetTimer));
</script>

<div class={className} aria-label="phone-call" role="img" onmouseenter={handleMouseEnter}>
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
		class:animate
	>
		<path d="M13 6a5 5 0 0 1 5 5" class="phone-call-wave1" />
		<path d="M13 2a9 9 0 0 1 9 9" class="phone-call-wave2" />
		<path
			d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
			class="phone-call-phone"
		/>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.phone-call-wave1,
	.phone-call-wave2 {
		opacity: 1;
		transform: scale(1);
		transform-origin: center;
	}

	.animate .phone-call-wave1 {
		animation: phoneCallWaveAnimation 0.6s ease-in-out;
	}

	.animate .phone-call-wave2 {
		animation: phoneCallWaveAnimation 0.6s ease-in-out 0.2s;
	}

	@keyframes phoneCallWaveAnimation {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		33.33% {
			opacity: 0;
			transform: scale(0);
		}
		66.67% {
			opacity: 0;
			transform: scale(0);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>

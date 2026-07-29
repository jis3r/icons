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

<div class={className} aria-label="message-square-plus" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="message-square-plus-group">
			<path
				d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
				class="message-square-plus-path1"
			/>
			<path d="M12 7v6" class="message-square-plus-path2" />
			<path d="M9 10h6" class="message-square-plus-path3" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-square-plus-group {
		transform-origin: bottom left;
	}

	.message-square-plus-path2,
	.message-square-plus-path3 {
		transform-origin: center;
	}

	.animate .message-square-plus-group {
		animation: messageSquarePlusGroupAnimation 0.8s ease-in-out;
	}

	.animate .message-square-plus-path2 {
		animation: messageSquarePlusPath2Animation 0.6s ease-in-out;
	}

	.animate .message-square-plus-path3 {
		animation: messageSquarePlusPath3Animation 0.6s ease-in-out 0.05s;
	}

	@keyframes messageSquarePlusGroupAnimation {
		0% {
			transform: rotate(0deg);
		}
		40% {
			transform: rotate(8deg);
		}
		60% {
			transform: rotate(-8deg);
		}
		80% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes messageSquarePlusPath2Animation {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(45deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes messageSquarePlusPath3Animation {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(45deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

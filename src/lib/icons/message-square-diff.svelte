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

<div class={className} aria-label="message-square-diff" role="img" onmouseenter={handleMouseEnter}>
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
		<g class="message-square-diff-group">
			<path
				d="m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
				class="message-square-diff-path1"
			/>
			<path d="M12 7v6" class="message-square-diff-path2" />
			<path d="M9 10h6" class="message-square-diff-path3" />
			<path d="M9 17h6" class="message-square-diff-path4" />
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.message-square-diff-group {
		transform-origin: bottom left;
	}

	.message-square-diff-path2,
	.message-square-diff-path3 {
		transform-origin: center;
	}

	.animate .message-square-diff-group {
		animation: messageSquareDiffGroupAnimation 0.8s ease-in-out;
	}

	.animate .message-square-diff-path2 {
		animation: messageSquareDiffPath2Animation 0.6s ease-in-out;
	}

	.animate .message-square-diff-path3 {
		animation: messageSquareDiffPath3Animation 0.6s ease-in-out 0.05s;
	}

	.animate .message-square-diff-path4 {
		animation: messageSquareDiffPath4Animation 0.7s ease-in-out;
	}

	@keyframes messageSquareDiffGroupAnimation {
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

	@keyframes messageSquareDiffPath2Animation {
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

	@keyframes messageSquareDiffPath3Animation {
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

	@keyframes messageSquareDiffPath4Animation {
		0% {
			transform: translateY(0);
		}
		33.33% {
			transform: translateY(1px);
		}
		66.67% {
			transform: translateY(-1px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>

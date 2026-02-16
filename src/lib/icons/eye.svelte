<script lang="ts">
	import type { IconProps } from './types.js';

	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate: animateProp = false,
		class: className = ''
	}: IconProps = $props();

	let animating = $state(false);
	let morphProgress = $state(0);
	let frameId = -1;
	let runId = 0;

	const closeDurationMs = 120;
	const openDurationMs = 160;
	const lineY = 12;
	const leftX = 2.062;
	const rightX = 21.938;
	const upperEndY = 11.652;
	const lowerEndY = 12.348;
	const archRadiusX = 10.75;
	const archRadiusY = 10.75;

	const easeIn = (t) => t * t * t;
	const easeOut = (t) => 1 - Math.pow(1 - t, 3);

	const topArchPath = (t) => {
		const y = upperEndY + (lineY - upperEndY) * t;
		const ry = Math.max(0.001, archRadiusY * (1 - t));
		return 'M ' + leftX + ' ' + y + ' A ' + archRadiusX + ' ' + ry + ' 0 0 1 ' + rightX + ' ' + y;
	};

	const bottomArchPath = (t) => {
		const y = lowerEndY - (lowerEndY - lineY) * t;
		const ry = Math.max(0.001, archRadiusY * (1 - t));
		return 'M ' + rightX + ' ' + y + ' A ' + archRadiusX + ' ' + ry + ' 0 0 1 ' + leftX + ' ' + y;
	};

	function animateMorph(from, to, durationMs, ease, currentRunId, onDone) {
		const start = performance.now();

		const tick = (now) => {
			if (currentRunId !== runId) return;
			const elapsed = now - start;
			const t = Math.min(elapsed / durationMs, 1);
			const eased = ease(t);
			morphProgress = from + (to - from) * eased;

			if (t < 1) {
				frameId = requestAnimationFrame(tick);
				return;
			}

			onDone();
		};

		frameId = requestAnimationFrame(tick);
	}

	function handleMouseEnter() {
		if (animating) return;
		if (frameId !== -1) cancelAnimationFrame(frameId);
		runId += 1;
		const currentRunId = runId;
		animating = true;

		animateMorph(0, 1, closeDurationMs, easeIn, currentRunId, () => {
			animateMorph(1, 0, openDurationMs, easeOut, currentRunId, () => {
				if (currentRunId !== runId) return;
				animating = false;
				morphProgress = 0;
				frameId = -1;
			});
		});
	}

	const topOutlineD = $derived(topArchPath(morphProgress));
	const bottomOutlineD = $derived(bottomArchPath(morphProgress));
</script>

<div class={className} aria-label="eye" role="img" onmouseenter={handleMouseEnter}>
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
		class="eye-icon"
		class:animate={animateProp || animating}
	>
		<path d={topOutlineD} class="eye-outline" />
		<path d={bottomOutlineD} class="eye-outline" />

		<circle cx="12" cy="12" r="3" class="eye-pupil" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	.eye-icon {
		overflow: visible;
	}
	.eye-pupil {
		transform-origin: 12px 12px;
	}
	.eye-icon.animate .eye-pupil {
		animation: blinkPupil 0.28s forwards;
	}
	@keyframes blinkPupil {
		0% {
			transform: scaleY(1);
			animation-timing-function: ease-in;
		}
		50% {
			transform: scaleY(0.042);
			animation-timing-function: ease-out;
		}
		100% {
			transform: scaleY(1);
		}
	}
</style>

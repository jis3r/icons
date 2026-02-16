<script lang="ts">
	import type { IconProps } from './types.js';
	import { animate } from 'motion';

	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		animate: animateProp = false,
		class: className = ''
	}: IconProps = $props();

	let animating = $state(false);
	let morphProgress = $state(0);

	const lineY = 12;
	const leftX = 2.062;
	const rightX = 21.938;
	const upperEndY = 11.652;
	const lowerEndY = 12.348;
	const archRadiusX = 10.75;
	const archRadiusY = 10.75;

	const topArchPath = (t: number) => {
		const y = upperEndY + (lineY - upperEndY) * t;
		const ry = Math.max(0.001, archRadiusY * (1 - t));
		return 'M ' + leftX + ' ' + y + ' A ' + archRadiusX + ' ' + ry + ' 0 0 1 ' + rightX + ' ' + y;
	};

	const bottomArchPath = (t: number) => {
		const y = lowerEndY - (lowerEndY - lineY) * t;
		const ry = Math.max(0.001, archRadiusY * (1 - t));
		return 'M ' + rightX + ' ' + y + ' A ' + archRadiusX + ' ' + ry + ' 0 0 1 ' + leftX + ' ' + y;
	};

	function handleMouseEnter() {
		if (animating) return;
		animating = true;
		animate(0, 1, {
			duration: 0.12,
			ease: 'easeIn',
			onUpdate: (v) => (morphProgress = v)
		}).then(() =>
			animate(1, 0, {
				duration: 0.16,
				ease: 'easeOut',
				onUpdate: (v) => (morphProgress = v)
			}).then(() => {
				animating = false;
			})
		);
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

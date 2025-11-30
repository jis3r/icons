<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [color]
	 * @property {number} [size]
	 * @property {number} [strokeWidth]
	 * @property {boolean} [isHovered]
	 * @property {string} [class]
	 */

	/** @type {Props} */
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		isHovered = false,
		class: className = ''
	} = $props();

	let line1Y1 = $state(10);
	let line1Y2 = $state(13);
	let line2Y1 = $state(6);
	let line2Y2 = $state(17);
	let line3Y1 = $state(3);
	let line3Y2 = $state(21);
	let line4Y1 = $state(8);
	let line4Y2 = $state(15);
	let line5Y1 = $state(5);
	let line5Y2 = $state(18);
	let line6Y1 = $state(10);
	let line6Y2 = $state(13);

	let animationFrameId = $state(null);
	let startTime = $state(null);
	let isAnimatingBack = $state(false);
	let startPositions = $state(null);

	const originalPositions = {
		line1: { y1: 10, y2: 13 },
		line2: { y1: 6, y2: 17 },
		line3: { y1: 3, y2: 21 },
		line4: { y1: 8, y2: 15 },
		line5: { y1: 5, y2: 18 },
		line6: { y1: 10, y2: 13 }
	};

	const line1Keyframes = [
		{ y1: 10, y2: 13 },
		{ y1: 5, y2: 18 },
		{ y1: 8, y2: 15 },
		{ y1: 6, y2: 17 },
		{ y1: 10, y2: 13 }
	];

	const line2Keyframes = [
		{ y1: 6, y2: 17 },
		{ y1: 2, y2: 22 },
		{ y1: 10, y2: 13 },
		{ y1: 6, y2: 17 }
	];

	const line3Keyframes = [
		{ y1: 3, y2: 21 },
		{ y1: 6, y2: 17 },
		{ y1: 3, y2: 21 },
		{ y1: 8, y2: 15 },
		{ y1: 3, y2: 21 }
	];

	const line4Keyframes = [
		{ y1: 8, y2: 15 },
		{ y1: 4, y2: 19 },
		{ y1: 7, y2: 16 },
		{ y1: 2, y2: 22 },
		{ y1: 8, y2: 15 }
	];

	const line5Keyframes = [
		{ y1: 5, y2: 18 },
		{ y1: 10, y2: 13 },
		{ y1: 4, y2: 19 },
		{ y1: 8, y2: 15 },
		{ y1: 5, y2: 18 }
	];

	const line6Keyframes = [
		{ y1: 10, y2: 13 },
		{ y1: 8, y2: 15 },
		{ y1: 5, y2: 18 },
		{ y1: 10, y2: 13 }
	];

	function easeOutCubic(t) {
		return 1 - Math.pow(1 - t, 3);
	}

	function interpolateKeyframes(keyframes, progress) {
		const totalFrames = keyframes.length - 1;
		const frameIndex = progress * totalFrames;
		const frame = Math.floor(frameIndex);
		const nextFrame = Math.min(frame + 1, totalFrames);
		const t = frameIndex - frame;

		const current = keyframes[frame];
		const next = keyframes[nextFrame];

		return {
			y1: current.y1 + (next.y1 - current.y1) * t,
			y2: current.y2 + (next.y2 - current.y2) * t
		};
	}

	function animate(timestamp) {
		if (!startTime) startTime = timestamp;
		const elapsed = (timestamp - startTime) / 1000;

		if (isAnimatingBack && startPositions) {
			const duration = 0.4;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = easeOutCubic(progress);

			line1Y1 =
				startPositions.line1.y1 +
				(originalPositions.line1.y1 - startPositions.line1.y1) * easedProgress;
			line1Y2 =
				startPositions.line1.y2 +
				(originalPositions.line1.y2 - startPositions.line1.y2) * easedProgress;
			line2Y1 =
				startPositions.line2.y1 +
				(originalPositions.line2.y1 - startPositions.line2.y1) * easedProgress;
			line2Y2 =
				startPositions.line2.y2 +
				(originalPositions.line2.y2 - startPositions.line2.y2) * easedProgress;
			line3Y1 =
				startPositions.line3.y1 +
				(originalPositions.line3.y1 - startPositions.line3.y1) * easedProgress;
			line3Y2 =
				startPositions.line3.y2 +
				(originalPositions.line3.y2 - startPositions.line3.y2) * easedProgress;
			line4Y1 =
				startPositions.line4.y1 +
				(originalPositions.line4.y1 - startPositions.line4.y1) * easedProgress;
			line4Y2 =
				startPositions.line4.y2 +
				(originalPositions.line4.y2 - startPositions.line4.y2) * easedProgress;
			line5Y1 =
				startPositions.line5.y1 +
				(originalPositions.line5.y1 - startPositions.line5.y1) * easedProgress;
			line5Y2 =
				startPositions.line5.y2 +
				(originalPositions.line5.y2 - startPositions.line5.y2) * easedProgress;
			line6Y1 =
				startPositions.line6.y1 +
				(originalPositions.line6.y1 - startPositions.line6.y1) * easedProgress;
			line6Y2 =
				startPositions.line6.y2 +
				(originalPositions.line6.y2 - startPositions.line6.y2) * easedProgress;

			if (progress < 1) {
				animationFrameId = requestAnimationFrame(animate);
			} else {
				line1Y1 = originalPositions.line1.y1;
				line1Y2 = originalPositions.line1.y2;
				line2Y1 = originalPositions.line2.y1;
				line2Y2 = originalPositions.line2.y2;
				line3Y1 = originalPositions.line3.y1;
				line3Y2 = originalPositions.line3.y2;
				line4Y1 = originalPositions.line4.y1;
				line4Y2 = originalPositions.line4.y2;
				line5Y1 = originalPositions.line5.y1;
				line5Y2 = originalPositions.line5.y2;
				line6Y1 = originalPositions.line6.y1;
				line6Y2 = originalPositions.line6.y2;
				isAnimatingBack = false;
				startPositions = null;
				animationFrameId = null;
			}
		} else {
			const duration = 1.5;
			const progress = (elapsed % duration) / duration;

			const line1 = interpolateKeyframes(line1Keyframes, progress);
			line1Y1 = line1.y1;
			line1Y2 = line1.y2;

			const line2 = interpolateKeyframes(line2Keyframes, progress);
			line2Y1 = line2.y1;
			line2Y2 = line2.y2;

			const line3 = interpolateKeyframes(line3Keyframes, progress);
			line3Y1 = line3.y1;
			line3Y2 = line3.y2;

			const line4 = interpolateKeyframes(line4Keyframes, progress);
			line4Y1 = line4.y1;
			line4Y2 = line4.y2;

			const line5 = interpolateKeyframes(line5Keyframes, progress);
			line5Y1 = line5.y1;
			line5Y2 = line5.y2;

			const line6 = interpolateKeyframes(line6Keyframes, progress);
			line6Y1 = line6.y1;
			line6Y2 = line6.y2;

			if (isHovered) {
				animationFrameId = requestAnimationFrame(animate);
			}
		}
	}

	function handleMouseEnter() {
		isHovered = true;
		isAnimatingBack = false;
		startTime = null;
		animationFrameId = requestAnimationFrame(animate);
	}

	function handleMouseLeave() {
		isHovered = false;
		startPositions = {
			line1: { y1: line1Y1, y2: line1Y2 },
			line2: { y1: line2Y1, y2: line2Y2 },
			line3: { y1: line3Y1, y2: line3Y2 },
			line4: { y1: line4Y1, y2: line4Y2 },
			line5: { y1: line5Y1, y2: line5Y2 },
			line6: { y1: line6Y1, y2: line6Y2 }
		};
		isAnimatingBack = true;
		startTime = null;
		if (!animationFrameId) {
			animationFrameId = requestAnimationFrame(animate);
		}
	}
</script>

<div
	class={className}
	aria-label="audio-lines"
	role="img"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
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
		class="audio-lines-icon"
		class:animate={isHovered}
	>
		<line x1="2" y1={line1Y1} x2="2" y2={line1Y2} />
		<line x1="6" y1={line2Y1} x2="6" y2={line2Y2} />
		<line x1="10" y1={line3Y1} x2="10" y2={line3Y2} />
		<line x1="14" y1={line4Y1} x2="14" y2={line4Y2} />
		<line x1="18" y1={line5Y1} x2="18" y2={line5Y2} />
		<line x1="22" y1={line6Y1} x2="22" y2={line6Y2} />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.audio-lines-icon {
		overflow: visible;
	}
</style>

<script>
	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="rocket"
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
		class="rocket-icon"
		class:animate={isHovered}
	>
		<path
			d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
			class="fire"
		/>
		<path
			d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
		/>
		<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
		<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
	</svg>
</div>

<style>
	.rocket-icon {
		overflow: visible;
		transition: transform 6s ease-in-out;
	}

	.rocket-icon.animate {
		animation: rocketMovement 6s ease-in-out infinite alternate;
	}

	.rocket-icon .fire {
		transition: d 2s ease;
	}

	.rocket-icon.animate .fire {
		animation: fireAnimation 2s ease infinite;
	}

	@keyframes rocketMovement {
		0%,
		100% {
			transform: translate(0, 0);
		}
		15% {
			transform: translate(0, -3px);
		}
		30% {
			transform: translate(-3px, 0);
		}
		45% {
			transform: translate(2px, -2px);
		}
		60% {
			transform: translate(-2px, -3px);
		}
		75% {
			transform: translate(1px, -1px);
		}
		90% {
			transform: translate(-1px, -2px);
		}
	}

	@keyframes fireAnimation {
		0%,
		100% {
			d: path(
				'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'
			);
		}
		20% {
			d: path(
				'M4.5 16.5c-1.5 1.26-3 5.5-3 5.5s4.74-1 6-2.5c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'
			);
		}
		50% {
			d: path(
				'M4.5 16.5c-1.5 1.26-2.2 4.8-2.2 4.8s3.94-0.3 5.2-1.8c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'
			);
		}
		80% {
			d: path(
				'M4.5 16.5c-1.5 1.26-2.8 5.2-2.8 5.2s4.54-0.7 5.8-2.2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'
			);
		}
	}
</style>

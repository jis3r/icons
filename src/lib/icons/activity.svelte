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
	aria-label="activity"
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
		class="activity-icon"
		class:animate={isHovered}
	>
		<path
			d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
			class="activity-path"
		/>
	</svg>
</div>

<style>
	.activity-icon {
		overflow: visible;
	}

	.activity-path {
		stroke-dasharray: 50;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.4s ease-in-out,
			opacity 0.1s ease-in-out;
	}

	.activity-icon.animate .activity-path {
		animation: drawPath 0.6s ease-in-out forwards;
	}

	@keyframes drawPath {
		0% {
			stroke-dashoffset: 50;
		}
		15% {
			stroke-dashoffset: 50;
		}
		100% {
			stroke-dashoffset: 100;
		}
	}
</style>

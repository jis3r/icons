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
	aria-label="layout-panel-left"
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
		class="layout-panel-left-icon"
		class:animate={isHovered}
	>
		<rect width="7" height="18" x="3" y="3" rx="1" class="left-panel" />
		<rect width="7" height="7" x="14" y="3" rx="1" class="top-right-panel" />
		<rect width="7" height="7" x="14" y="14" rx="1" class="bottom-right-panel" />
	</svg>
</div>

<style>
	.layout-panel-left-icon {
		overflow: visible;
	}

	.layout-panel-left-icon.animate .left-panel {
		opacity: 0;
		animation: fadeInLeft 0.3s ease-in forwards;
	}

	.layout-panel-left-icon.animate .top-right-panel {
		opacity: 0;
		animation: fadeInBox 0.4s ease-out 0.1s forwards;
	}

	.layout-panel-left-icon.animate .bottom-right-panel {
		opacity: 0;
		animation: fadeInBox 0.4s ease-out 0.2s forwards;
	}

	@keyframes fadeInLeft {
		0%,
		20% {
			opacity: 0;
			transform: translateX(-5px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes fadeInBox {
		0%,
		50% {
			opacity: 0;
			transform: translateX(10px);
		}
		80% {
			opacity: 0.8;
			transform: translateX(-2px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>

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
	aria-label="timer"
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
		class="timer-icon"
		class:animate={isHovered}
	>
		<line x1="10" x2="14" y1="2" y2="2" class="button" />
		<line x1="12" x2="15" y1="14" y2="11" class="hand" />
		<circle cx="12" cy="14" r="8" />
	</svg>
</div>

<style>
	.timer-icon {
		overflow: visible;
	}

	.button {
		transform-origin: center;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.timer-icon.animate .button {
		animation: buttonPress 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.hand {
		transform-origin: 12px 14px;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.timer-icon.animate .hand {
		transform: rotate(300deg);
		transition-delay: 0.1s;
	}

	@keyframes buttonPress {
		0%,
		100% {
			transform: scale(1) translateY(0);
		}
		50% {
			transform: scale(0.9) translateY(0.5px);
		}
	}
</style>

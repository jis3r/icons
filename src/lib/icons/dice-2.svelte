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
		setTimeout(() => {
			isHovered = false;
		}, 1000);
	}
</script>

<div class={classes} aria-label="dice-2" role="img" onmouseenter={handleMouseEnter}>
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
		class="dice-2-icon"
		class:animate={isHovered}
	>
		<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
		<path d="M15 9h.01" />
		<path d="M9 15h.01" />
	</svg>
</div>

<style>
	.dice-2-icon {
		overflow: visible;
	}
	.dice-2-icon.animate {
		animation: diceRoll 1s ease-in-out;
	}

	@keyframes diceRoll {
		0% {
			transform: translateX(0) rotate(0deg);
		}
		25% {
			transform: translateX(-20%) rotate(45deg);
		}
		50% {
			transform: translateX(0) rotate(90deg);
		}
		75% {
			transform: translateX(-20%) rotate(135deg);
		}
		100% {
			transform: translateX(0) rotate(180deg);
		}
	}
</style>

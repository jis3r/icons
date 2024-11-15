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
	aria-label="shovel"
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
		class="shovel-icon"
		class:animate={isHovered}
	>
		<path d="M2 22v-5l5-5 5 5-5 5z" />
		<path d="M9.5 14.5 16 8" />
		<path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0 3.53 3.53 0 0 1 0-5L17 2" />
	</svg>
</div>

<style>
	.shovel-icon {
		transition: transform 0.3s ease;
	}

	.shovel-icon.animate {
		animation: dig 0.5s ease-out 2;
	}

	@keyframes dig {
		0% {
			transform: translate(0, 0);
		}
		60% {
			transform: translate(2px, -2px);
		}
		80% {
			transform: translate(-5px, 5px);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>

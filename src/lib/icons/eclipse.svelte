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
	aria-label="eclipse"
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
		class="eclipse-icon"
		class:animate={isHovered}
	>
		<defs>
			<clipPath id="clipSun" clipPathUnits="userSpaceOnUse">
				<circle cx="12" cy="12" r="10" />
			</clipPath>
		</defs>

		<circle cx="12" cy="12" r="10" class="sun" />

		<g clip-path="url(#clipSun)">
			<path d="M12 2a7 7 0 1 0 10 10" class="moon" />
		</g>
	</svg>
</div>

<style>
	.eclipse-icon {
		overflow: visible;
	}

	.sun {
		transform-origin: center;
		transition: transform 0.3s ease-in-out;
	}

	.moon {
		transform-origin: center;
		transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
		transform: translate(0, 0);
	}

	.eclipse-icon.animate .moon {
		transform: translate(3px, -3px);
	}
</style>

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

<div class={classes} aria-label="infinity" role="img" onmouseenter={handleMouseEnter}>
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
		class="infinity-icon"
		class:animate={isHovered}
	>
		<path
			d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
			class="line"
		/>
	</svg>
</div>

<style>
	.infinity-icon {
		overflow: visible;
	}

	.line {
		stroke-dasharray: 28;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 1s ease-in-out;
	}

	.infinity-icon.animate .line {
		animation: lineAnimation 1s ease-in-out;
	}

	@keyframes lineAnimation {
		0% {
			stroke-dashoffset: 28;
		}
		15% {
			stroke-dashoffset: 28;
		}
		100% {
			stroke-dashoffset: 56;
		}
	}
</style>

<script>
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();

	function handleMouseEnter() {
		isHovered = true;
		setTimeout(() => {
			isHovered = false;
		}, 500);
	}
</script>

<div class={classes} aria-label="shield-plus" role="img" onmouseenter={handleMouseEnter}>
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
		class="shield-plus"
		class:animate={isHovered}
	>
		<path
			d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
			class="shield"
		/>
		<path d="M9 12h6" class="horizontal" />
		<path d="M12 9v6" class="vertical" />
	</svg>
</div>

<style>
	.shield-plus {
		overflow: visible;
	}

	.horizontal,
	.vertical {
		stroke-dasharray: 8;
		stroke-dashoffset: 0;
		transition: stroke-dashoffset 0.15s ease-out;
	}

	.shield-plus.animate .horizontal {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out forwards;
	}

	.shield-plus.animate .vertical {
		opacity: 0;
		animation: lineAnimation 0.3s ease-out 0.25s forwards;
	}

	@keyframes lineAnimation {
		0% {
			opacity: 0;
			stroke-dashoffset: 8;
		}
		15% {
			opacity: 1;
			stroke-dashoffset: 8;
		}
		100% {
			opacity: 1;
			stroke-dashoffset: 0;
		}
	}
</style>

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
		}, 800);
	}
</script>

<div class={classes} aria-label="square-scissors" role="img" onmouseenter={handleMouseEnter}>
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
		class:animate={isHovered}
	>
		<rect width="20" height="20" x="2" y="2" rx="2" />
		<g class="blade-top">
			<circle cx="8" cy="8" r="2" />
			<path d="M9.414 9.414 12 12" />
			<path d="M14.8 14.8 18 18" />
		</g>

		<g class="blade-bottom">
			<circle cx="8" cy="16" r="2" />
			<path d="m18 6-8.586 8.586" />
		</g>
	</svg>
</div>

<style>
	.blade-top,
	.blade-bottom {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transform-origin: 12px 12px;
	}

	.animate .blade-top {
		animation: openBlade 0.8s ease-in-out;
	}

	.animate .blade-bottom {
		animation: closeBlade 0.8s ease-in-out;
	}

	@keyframes openBlade {
		0%,
		50%,
		100% {
			transform: rotate(0);
		}
		25%,
		75% {
			transform: rotate(-20deg);
		}
	}

	@keyframes closeBlade {
		0%,
		50%,
		100% {
			transform: rotate(0);
		}
		25%,
		75% {
			transform: rotate(20deg);
		}
	}
</style>

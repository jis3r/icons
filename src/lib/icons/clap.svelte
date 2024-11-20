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
	aria-label="clap"
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
		class="clap-icon"
		class:animate={isHovered}
	>
		<g class="clap-outer">
			<g class="clap-inner">
				<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
				<path d="m6.2 5.3 3.1 3.9" />
				<path d="m12.4 3.4 3.1 4" />
			</g>
			<path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
		</g>
	</svg>
</div>

<style>
	.clap-icon {
		overflow: visible;
	}

	.clap-outer {
		transform-origin: 4px 20px;
		transition: transform 0.8s ease-in-out;
	}

	.clap-inner {
		transform-origin: 3px 11px;
		transition: transform 0.4s ease-in-out;
	}

	.clap-icon.animate .clap-outer {
		animation: clapOuter 0.8s ease-in-out;
	}

	.clap-icon.animate .clap-inner {
		animation: clapInner 0.4s ease-in-out;
	}

	@keyframes clapOuter {
		0%,
		50% {
			transform: rotate(-10deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes clapInner {
		0% {
			transform: rotate(0deg);
		}
		30% {
			transform: rotate(-10deg);
		}
		60% {
			transform: rotate(16deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>

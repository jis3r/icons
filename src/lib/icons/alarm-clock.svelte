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
	aria-label="alarm-clock"
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
		class="alarm-clock-icon"
		class:animate={isHovered}
	>
		<path d="M18 20.5L19.5 22" class="primary-path" />
		<path d="M6 20.5L4.5 22" class="primary-path" />
		<path
			d="M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z"
			class="primary-path"
		/>
		<path
			d="M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898"
			class="primary-path"
		/>
		<path d="M18 2L21.747 5.31064" class="secondary-path" />
		<path d="M6 2L2.25304 5.31064" class="secondary-path" />
	</svg>
</div>

<style>
	.alarm-clock-icon {
		overflow: visible;
	}

	.alarm-clock-icon path {
		transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.alarm-clock-icon.animate .primary-path {
		animation: primaryPathAnimation 0.3s linear infinite;
	}

	.alarm-clock-icon.animate .secondary-path {
		animation: secondaryPathAnimation 0.3s linear infinite;
	}

	@keyframes primaryPathAnimation {
		0%,
		100% {
			transform: translate(0, -1.5px);
		}
		20%,
		60% {
			transform: translate(-1px, -1.5px);
		}
		40%,
		80% {
			transform: translate(1px, -1.5px);
		}
	}

	@keyframes secondaryPathAnimation {
		0%,
		100% {
			transform: translate(0, -2.5px);
		}
		20%,
		60% {
			transform: translate(-2px, -2.5px);
		}
		40%,
		80% {
			transform: translate(2px, -2.5px);
		}
	}
</style>

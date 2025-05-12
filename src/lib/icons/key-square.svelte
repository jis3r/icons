<script>
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		isHovered = false,
		class: className = ''
	} = $props();

	function handleMouseEnter() {
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 600);
	}
</script>

<div class={className} aria-label="key-square" role="img" onmouseenter={handleMouseEnter}>
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
		class="key-square-icon"
		class:animate={isHovered}
	>
		<path
			d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"
		/>
		<path d="m14 7 3 3" />
		<path
			d="m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"
		/>
	</svg>
</div>

<style>
	.key-square-icon {
		overflow: visible;
	}

	.key-square-icon.animate {
		transform-origin: center;
		animation: keyAnimation 0.6s;
	}

	@keyframes keyAnimation {
		0% {
			transform: rotate(0deg) scale(1);
		}
		30% {
			transform: rotate(15deg) scale(1.05);
		}
		70% {
			transform: rotate(-15deg) scale(1);
		}
		100% {
			transform: rotate(0deg) scale(1);
		}
	}
</style>

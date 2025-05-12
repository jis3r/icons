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
		}, 900);
	}
</script>

<div class={className} aria-label="key-round" role="img" onmouseenter={handleMouseEnter}>
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
		class="key-round-icon"
		class:animate={isHovered}
	>
		<path
			d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
		/>
		<circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
	</svg>
</div>

<style>
	.key-round-icon {
		transform-origin: center;
		transition: transform 0.3s ease;
	}

	.key-round-icon.animate {
		animation: keyBounce 0.9s ease;
	}

	@keyframes keyBounce {
		0% {
			transform: translateY(0) rotate(0deg);
		}
		20% {
			transform: translateY(-3px) rotate(3deg);
		}
		40% {
			transform: translateY(0) rotate(-3deg);
		}
		60% {
			transform: translateY(-2px) rotate(0deg);
		}
		100% {
			transform: translateY(0) rotate(0deg);
		}
	}
</style>

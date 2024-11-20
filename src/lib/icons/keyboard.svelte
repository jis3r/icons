<script>
	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();

	const keyboardPaths = [
		{ id: 'key1', d: 'M10 8h.01', delay: 0 },
		{ id: 'key2', d: 'M12 12h.01', delay: 0.05 },
		{ id: 'key3', d: 'M14 8h.01', delay: 0.1 },
		{ id: 'key4', d: 'M16 12h.01', delay: 0.15 },
		{ id: 'key5', d: 'M18 8h.01', delay: 0.2 },
		{ id: 'key6', d: 'M6 8h.01', delay: 0.25 },
		{ id: 'key7', d: 'M7 16h10', delay: 0.3 },
		{ id: 'key8', d: 'M8 12h.01', delay: 0.35 }
	];

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="keyboard"
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
		class="keyboard-icon"
	>
		<rect width="20" height="16" x="2" y="4" rx="2" />
		{#each keyboardPaths as { id, d, delay }}
			<path
				{id}
				{d}
				class="keyboard-key"
				class:animate={isHovered}
				style="animation-delay: {delay}s;"
			/>
		{/each}
	</svg>
</div>

<style>
	.keyboard-icon {
		overflow: visible;
	}

	.keyboard-key {
		opacity: 1;
	}

	@keyframes fadeInOut {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.2;
		}
	}

	.keyboard-key.animate {
		animation: fadeInOut 1.5s ease-in-out infinite;
	}
</style>

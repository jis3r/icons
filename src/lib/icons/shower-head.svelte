<script>
	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();

	const dropPath = [
		{ id: 'drop1', d: 'M14 17v.01', delay: 0 },
		{ id: 'drop2', d: 'M10 16v.01', delay: 0.2 },
		{ id: 'drop3', d: 'M13 13v.01', delay: 0.4 },
		{ id: 'drop4', d: 'M16 10v.01', delay: 0.6 },
		{ id: 'drop5', d: 'M11 20v.01', delay: 0.8 },
		{ id: 'drop6', d: 'M17 14v.01', delay: 1 },
		{ id: 'drop7', d: 'M20 11v.01', delay: 1.2 }
	];

	function handleMouseEnter() {
		if (isHovered) return;
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={classes}
	aria-label="shower-head"
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
		class="shower-head-icon"
	>
		<path d="m4 4 2.5 2.5" />
		<path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
		<path d="M15 5 5 15" />
		<g class="drops">
			{#each dropPath as { id, d, delay }}
				<path {id} {d} class="drop" class:animate={isHovered} style="animation-delay: {delay}s;" />
			{/each}
		</g>
	</svg>
</div>

<style>
	.shower-head-icon {
		overflow: visible;
	}

	.drop {
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

	.drop.animate {
		animation: fadeInOut 1s ease-in-out infinite;
	}
</style>

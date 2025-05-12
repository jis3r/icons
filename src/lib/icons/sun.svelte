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
		}, 1100);
	}

	const sunRays = [
		'M12 2v2',
		'm19.07 4.93-1.41 1.41',
		'M20 12h2',
		'm17.66 17.66 1.41 1.41',
		'M12 20v2',
		'm6.34 17.66-1.41 1.41',
		'M2 12h2',
		'm4.93 4.93 1.41 1.41'
	];
</script>

<div class={className} aria-label="sun" role="img" onmouseenter={handleMouseEnter}>
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
		class="sun-icon"
		class:animate={isHovered}
	>
		<circle cx="12" cy="12" r="4" />
		{#each sunRays as d, index}
			<path {d} class="sun-ray" style="--index: {index + 1}" />
		{/each}
	</svg>
</div>

<style>
	.sun-icon {
		overflow: visible;
	}

	.sun-ray {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	.sun-icon.animate .sun-ray {
		opacity: 0;
		animation: fadeIn 0.3s ease forwards;
		animation-delay: calc(0.1s + var(--index) * 0.09s);
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

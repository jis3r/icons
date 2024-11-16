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
		}, 700);
	}
</script>

<div
	class={classes}
	aria-label="file-chart-column-increasing"
	role="img"
	onmouseenter={handleMouseEnter}
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
		class="file-chart-column-increasing-icon"
		class:animate={isHovered}
	>
		<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
		<path d="M14 2v4a2 2 0 0 0 2 2h4" />
		<path d="M8 18v-2" class="column column-0" />
		<path d="M12 18v-4" class="column column-1" />
		<path d="M16 18v-6" class="column column-2" />
	</svg>
</div>

<style>
	.file-chart-column-increasing-icon {
		overflow: visible;
	}

	.column {
		stroke-dasharray: 20;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.file-chart-column-increasing-icon.animate .column {
		animation: columnAnimation 0.6s ease forwards;
	}

	.file-chart-column-increasing-icon.animate .column-0 {
		animation-delay: 0s;
	}

	.file-chart-column-increasing-icon.animate .column-1 {
		animation-delay: 0.1s;
	}

	.file-chart-column-increasing-icon.animate .column-2 {
		animation-delay: 0.2s;
	}

	@keyframes columnAnimation {
		0% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
		50% {
			stroke-dashoffset: 20;
			opacity: 0;
		}
		100% {
			stroke-dashoffset: 0;
			opacity: 1;
		}
	}
</style>

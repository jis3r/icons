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

<div class={classes} aria-label="kanban" role="img" onmouseenter={handleMouseEnter}>
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
		class="kanban-icon"
		class:animate={isHovered}
	>
		<path d="M6 5v11" class="column column-0" />
		<path d="M12 5v6" class="column column-1" />
		<path d="M18 5v14" class="column column-2" />
	</svg>
</div>

<style>
	.kanban-icon {
		overflow: visible;
	}

	.column {
		stroke-dasharray: 20;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.kanban-icon.animate .column {
		animation: columnAnimation 0.6s ease forwards;
	}

	.kanban-icon.animate .column-0 {
		animation-delay: 0s;
	}

	.kanban-icon.animate .column-1 {
		animation-delay: 0.1s;
	}

	.kanban-icon.animate .column-2 {
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

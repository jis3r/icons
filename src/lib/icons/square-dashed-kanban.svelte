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

<div class={classes} aria-label="square-dashed-kanban" role="img" onmouseenter={handleMouseEnter}>
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
		class="square-dashed-kanban-icon"
		class:animate={isHovered}
	>
		<path d="M8 7v7" class="column column-0" />
		<path d="M12 7v4" class="column column-1" />
		<path d="M16 7v9" class="column column-2" />
		<path d="M5 3a2 2 0 0 0-2 2" />
		<path d="M9 3h1" />
		<path d="M14 3h1" />
		<path d="M19 3a2 2 0 0 1 2 2" />
		<path d="M21 9v1" />
		<path d="M21 14v1" />
		<path d="M21 19a2 2 0 0 1-2 2" />
		<path d="M14 21h1" />
		<path d="M9 21h1" />
		<path d="M5 21a2 2 0 0 1-2-2" />
		<path d="M3 14v1" />
		<path d="M3 9v1" />
	</svg>
</div>

<style>
	.square-dashed-kanban-icon {
		overflow: visible;
	}

	.column {
		stroke-dasharray: 20;
		stroke-dashoffset: 0;
		transition:
			stroke-dashoffset 0.3s ease,
			opacity 0.3s ease;
	}

	.square-dashed-kanban-icon.animate .column {
		animation: columnAnimation 0.6s ease forwards;
	}

	.square-dashed-kanban-icon.animate .column-0 {
		animation-delay: 0s;
	}

	.square-dashed-kanban-icon.animate .column-1 {
		animation-delay: 0.1s;
	}

	.square-dashed-kanban-icon.animate .column-2 {
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

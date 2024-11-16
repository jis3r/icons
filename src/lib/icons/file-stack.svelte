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
	aria-label="file-stack"
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
		class="file-stack-icon"
		class:animate={isHovered}
	>
		<path d="M21 7h-3a2 2 0 0 1-2-2V2" class="file-top" />
		<path
			d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"
			class="file-top"
		/>
		<path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
		<path d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" class="file-bottom" />
	</svg>
</div>

<style>
	.file-stack-icon {
		overflow: visible;
	}

	.file-top,
	.file-bottom {
		transition: transform 0.3s ease;
	}

	.file-stack-icon.animate .file-top {
		transform: translate(-4px, 4px);
	}

	.file-stack-icon.animate .file-bottom {
		transform: translate(4px, -4px);
	}
</style>

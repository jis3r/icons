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
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class={className}
	aria-label="file-cog"
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
		class="file-cog-icon"
		><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path
			d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"
		/><g class="cog-group" class:animate={isHovered}
			><path d="m3.2 12.9-.9-.4" /><path d="m3.2 15.1-.9.4" /><path d="m4.9 11.2-.4-.9" /><path
				d="m4.9 16.8-.4.9"
			/><path d="m7.5 10.3-.4.9" /><path d="m7.5 17.7-.4-.9" /><path d="m9.7 12.5-.9.4" /><path
				d="m9.7 15.5-.9-.4"
			/><circle cx="6" cy="14" r="3" /></g
		></svg
	>
</div>

<style>
	.file-cog-icon {
		overflow: visible;
	}

	.cog-group {
		transform-origin: 6px 14px;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cog-group.animate {
		transform: rotate(180deg);
	}
</style>

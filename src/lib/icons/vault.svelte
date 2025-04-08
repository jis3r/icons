<script>
	let {
		color = 'currentColor',
		size = 24,
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
	aria-label="vault"
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
		class="vault-icon"
		><rect width="18" height="18" x="3" y="3" rx="2" /><g
			class="inner-elements"
			class:hovered={isHovered}
			><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /><path d="m7.9 7.9 2.7 2.7" /><circle
				cx="16.5"
				cy="7.5"
				r=".5"
				fill="currentColor"
			/><path d="m13.4 10.6 2.7-2.7" /><circle cx="7.5" cy="16.5" r=".5" fill="currentColor" /><path
				d="m7.9 16.1 2.7-2.7"
			/><circle cx="16.5" cy="16.5" r=".5" fill="currentColor" /><path
				d="m13.4 13.4 2.7 2.7"
			/><circle cx="12" cy="12" r="2" /></g
		></svg
	>
</div>

<style>
	.vault-icon {
		overflow: visible;
	}

	.inner-elements {
		transform-origin: center;
		transition: transform 0.35s ease-in-out;
		transform: rotate(0deg);
	}

	.inner-elements.hovered {
		transform: rotate(90deg);
	}
</style>

<script>
	let { color = '#fff', isHovered } = $props();

	function handleMouseEnter() {
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 200);
	}
</script>

<div
	class="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-neutral-800"
	on:mouseenter={handleMouseEnter}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="28"
		height="28"
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="m12 19-7-7 7-7" class:animate={isHovered} />
		<path d="M19 12H5" class:animate={isHovered} />
	</svg>
</div>

<style>
	path {
		transition: all 0.4s ease;
	}

	.animate:nth-child(1) {
		transform: translateX(3px);
	}

	.animate:nth-child(2) {
		d: path('M19 12H10');
	}
</style>

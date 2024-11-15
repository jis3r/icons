<script>
	import { spring } from 'svelte/motion';

	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();

	const animatedX = spring(0, {
		stiffness: 200,
		damping: 13
	});

	function handleMouseEnter() {
		isHovered = true;
		animatedX.set(-5);

		setTimeout(() => {
			isHovered = false;
			animatedX.set(0);
		}, 300);
	}
</script>

<div class={classes} aria-label="users-round" role="img" onmouseenter={handleMouseEnter}>
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
		class="users-round-icon"
	>
		<path d="M18 21a8 8 0 0 0-16 0" />
		<circle cx="10" cy="8" r="5" />
		<path
			d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
			style="transform: translateX({$animatedX}px)"
		/>
	</svg>
</div>

<style>
	.users-round-icon {
		overflow: hidden;
	}

	.users-round-icon path,
	.users-round-icon circle {
		transition: all 0.3s ease;
	}
</style>

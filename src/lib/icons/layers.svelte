<script>
	import { onMount } from 'svelte';

	let {
		color = 'currentColor',
		size = 28,
		strokeWidth = 2,
		isHovered = false,
		classes = ''
	} = $props();
	let animationState = $state('normal');

	function handleMouseEnter() {
		isHovered = true;
		animationState = 'firstState';
		setTimeout(() => {
			animationState = 'secondState';
		}, 300);
	}

	function handleMouseLeave() {
		isHovered = false;
		animationState = 'normal';
	}

	onMount(() => {
		animationState = 'normal';
	});
</script>

<div
	class={classes}
	aria-label="layers"
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
		class="layers-icon"
		class:animate={isHovered}
	>
		<path
			d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
		/>
		<path
			d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
			class="layer layer-bottom"
			class:firstState={animationState === 'firstState'}
			class:secondState={animationState === 'secondState'}
		/>
		<path
			d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
			class="layer layer-middle"
			class:firstState={animationState === 'firstState'}
			class:secondState={animationState === 'secondState'}
		/>
	</svg>
</div>

<style>
	.layers-icon {
		overflow: visible;
	}

	.layer {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.layer-bottom.firstState {
		transform: translateY(-9px);
	}

	.layer-middle.firstState {
		transform: translateY(-5px);
	}

	.layer-bottom.secondState,
	.layer-middle.secondState {
		transform: translateY(0);
	}
</style>

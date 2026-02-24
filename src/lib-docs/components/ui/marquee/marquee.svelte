<script lang="ts" module>
	import { cn, type WithElementRef } from '$lib-docs/utils.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type MarqueeDirection = 'left' | 'right';

	export type MarqueeProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
		direction?: MarqueeDirection;
		speed?: number;
		delay?: number;
		loop?: number;
		autoFill?: boolean;
		play?: boolean;
		pauseOnHover?: boolean;
		pauseOnClick?: boolean;
		gap?: string;
		onFinish?: () => void;
		onCycleComplete?: () => void;
		onMount?: () => void;
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let {
		ref = $bindable(null),
		direction = 'left',
		speed = 50,
		delay = 0,
		loop = 0,
		autoFill = false,
		play = true,
		pauseOnHover = false,
		pauseOnClick = false,
		gap = '1rem',
		onFinish,
		onCycleComplete,
		onMount: onMountCallback,
		class: className,
		children,
		...restProps
	}: MarqueeProps = $props();

	let containerWidth = $state(0);
	let baseContentWidth = $state(0);

	const safeSpeed = $derived(Math.max(speed, 1));
	const safeDelay = $derived(Math.max(delay, 0));
	const repeatCount = $derived.by(() => {
		if (!autoFill || baseContentWidth <= 0 || containerWidth <= 0) return 1;
		return baseContentWidth < containerWidth ? Math.ceil(containerWidth / baseContentWidth) : 1;
	});
	const repeatIndexes = $derived.by(() => Array.from({ length: repeatCount }, (_, index) => index));
	const travelWidth = $derived.by(() => {
		if (baseContentWidth <= 0) return 0;
		if (autoFill) return baseContentWidth * repeatCount;
		return baseContentWidth < containerWidth ? containerWidth : baseContentWidth;
	});
	const durationSeconds = $derived(travelWidth > 0 ? travelWidth / safeSpeed : 0);
	const playState = $derived(play ? 'running' : 'paused');
	const animationDirection = $derived(direction === 'left' ? 'normal' : 'reverse');
	const iterationCount = $derived(loop > 0 ? String(Math.max(1, Math.floor(loop))) : 'infinite');

	onMount(() => {
		onMountCallback?.();
	});
</script>

<div
	bind:this={ref}
	data-slot="marquee"
	class={cn('marquee-root w-full overflow-x-hidden', className)}
	bind:clientWidth={containerWidth}
	data-pause-on-hover={pauseOnHover ? 'true' : undefined}
	data-pause-on-click={pauseOnClick ? 'true' : undefined}
	style:--marquee-gap={gap}
	style:--marquee-play-state={playState}
	style:--marquee-direction={animationDirection}
	style:--marquee-duration={`${durationSeconds}s`}
	style:--marquee-delay={`${safeDelay}s`}
	style:--marquee-iteration-count={iterationCount}
	{...restProps}
>
	<div class="marquee-measure" aria-hidden="true">
		<div class="marquee-measure-content" bind:clientWidth={baseContentWidth}>
			{@render children?.()}
		</div>
	</div>

	<div
		data-slot="marquee-track"
		class="marquee-strip"
		onanimationiteration={() => onCycleComplete?.()}
		onanimationend={() => onFinish?.()}
	>
		{#each repeatIndexes as index (index)}
			{@render children?.()}
		{/each}
	</div>

	<div data-slot="marquee-track" class="marquee-strip" aria-hidden="true">
		{#each repeatIndexes as index (index)}
			{@render children?.()}
		{/each}
	</div>
</div>

<style>
	.marquee-root {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.marquee-root[data-pause-on-hover='true']:hover .marquee-strip {
		animation-play-state: paused;
	}

	.marquee-root[data-pause-on-click='true']:active .marquee-strip {
		animation-play-state: paused;
	}

	.marquee-measure {
		position: absolute;
		top: 0;
		left: 0;
		width: max-content;
		visibility: hidden;
		pointer-events: none;
	}

	.marquee-measure-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: max-content;
		gap: var(--marquee-gap, 1rem);
		padding-right: var(--marquee-gap, 1rem);
	}

	.marquee-strip {
		flex: 0 0 auto;
		min-width: 100%;
		z-index: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--marquee-gap, 1rem);
		padding-right: var(--marquee-gap, 1rem);
		animation: marquee-scroll var(--marquee-duration, 0s) linear var(--marquee-delay, 0s)
			var(--marquee-iteration-count, infinite);
		animation-play-state: var(--marquee-play-state, running);
		animation-direction: var(--marquee-direction, normal);
	}

	@keyframes marquee-scroll {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-100%);
		}
	}
</style>

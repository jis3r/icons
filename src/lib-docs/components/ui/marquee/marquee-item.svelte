<script lang="ts" module>
	import { cn, type WithElementRef } from '$lib-docs/utils.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type MarqueeItemProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
		children?: Snippet;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: MarqueeItemProps = $props();
</script>

<div bind:this={ref} data-slot="marquee-item" class={cn('shrink-0', className)} {...restProps}>
	{@render children?.()}
</div>

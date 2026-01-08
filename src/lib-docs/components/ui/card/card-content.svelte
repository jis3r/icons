<script>
	import { cn } from '$lib-docs/utils.js';

	let { ref = $bindable(null), class: className, children, ...restProps } = $props();
</script>

<div bind:this={ref} class={cn('p-6', className)} {...restProps}>
	{@render children?.()}
</div>

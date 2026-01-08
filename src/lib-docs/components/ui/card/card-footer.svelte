<script>
	import { cn } from '$lib-docs/utils.js';

	let { ref = $bindable(null), class: className, children, ...restProps } = $props();
</script>

<div bind:this={ref} class={cn('flex items-center p-6 pt-0', className)} {...restProps}>
	{@render children?.()}
</div>

<script>
	import { cn } from '$lib/utils.js';

	let { ref = $bindable(null), class: className, children, ...restProps } = $props();
</script>

<div bind:this={ref} class={cn('flex flex-col space-y-1.5 p-6 pb-0', className)} {...restProps}>
	{@render children?.()}
</div>

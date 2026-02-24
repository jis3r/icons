<script>
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '$lib-docs/utils.js';

	let { ref = $bindable(null), class: className, inset, ...restProps } = $props();
</script>

<ContextMenuPrimitive.GroupHeading
	bind:ref
	data-slot="context-menu-group-heading"
	data-inset={inset}
	class={cn('text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:ps-8', className)}
	{...restProps}
/>

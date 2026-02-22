<script>
	import { cn } from "$lib-docs/utils.js";
	let {
		ref = $bindable(null),
		class: className,
		inset,
		children,
		...restProps
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="context-menu-label"
	data-inset={inset}
	class={cn("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:ps-8", className)}
	{...restProps}
>
	{@render children?.()}
</div>
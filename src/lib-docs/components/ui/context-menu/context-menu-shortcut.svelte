<script>
	import { cn } from "$lib-docs/utils.js";
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	} = $props();
</script>

<span
	bind:this={ref}
	data-slot="context-menu-shortcut"
	class={cn("text-muted-foreground ms-auto text-xs tracking-widest", className)}
	{...restProps}
>
	{@render children?.()}
</span>
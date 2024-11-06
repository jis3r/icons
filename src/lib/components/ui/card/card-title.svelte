<script>
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export let tag = "h3";
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={cn("text-lg font-semibold leading-none tracking-tight", className)}
	{...$$restProps}
>
	<slot />
</svelte:element>

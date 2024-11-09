<script>
	import { badgeVariants } from "./index.js";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export let href = undefined;
	export let variant = "default";
	export { className as class };
</script>

<svelte:element
	this={href ? "a" : "span"}
	{href}
	class={cn(badgeVariants({ variant, className }))}
	{...$$restProps}
>
	<slot />
</svelte:element>

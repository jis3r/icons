<script>
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<div class={cn("flex items-center p-6 pt-0", className)} {...$$restProps}>
	<slot />
</div>

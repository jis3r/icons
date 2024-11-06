<script>
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<div class={cn("flex flex-col space-y-1.5 p-6 pb-0", className)} {...$$restProps}>
	<slot />
</div>

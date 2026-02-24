<script>
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { open = $bindable(false), ...restProps } = $props();
</script>

<ContextMenuPrimitive.Sub bind:open {...restProps} />

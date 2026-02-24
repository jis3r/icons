<script>
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { ...restProps } = $props();
</script>

<ContextMenuPrimitive.Portal {...restProps} />

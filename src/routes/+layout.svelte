<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		if (browser) {
			posthog.init('phc_MRu5fLKb2djv49nDpyoTQqni5TuQLC8k2pJOVyERMmE', {
				api_host: 'https://eu.i.posthog.com',
				person_profiles: 'always'
			});
		}
	});
</script>

<ModeWatcher />

{@render children()}

<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { ModeWatcher } from 'mode-watcher';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<ModeWatcher />

{@render children()}

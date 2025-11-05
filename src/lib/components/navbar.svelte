<script>
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import Github from '$lib/components/github.svelte';
	import NumberFlow from '@number-flow/svelte';

	let stars = $state(0);

	onMount(async () => {
		const res = await fetch('https://api.github.com/repos/jis3r/icons');
		const data = await res.json();
		stars = data.stargazers_count;
	});
</script>

<header
	class="border-text-muted-foreground fixed top-0 z-50 h-[72px] w-full border-b bg-background bg-opacity-40 backdrop-blur-xl"
>
	<nav class="container flex items-center justify-between py-4">
		<h1 class="text-base">jis3r/icons</h1>
		<div class="flex gap-1">
			<Button variant="outline" class="flex gap-2" href="https://github.com/jis3r/icons">
				<Github size="20" />
				<NumberFlow value={stars} />
			</Button>

			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</nav>
</header>

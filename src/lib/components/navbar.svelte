<script>
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { onMount, onDestroy } from 'svelte';
	import Github from '$lib/components/github.svelte';
	import NumberFlow from '@number-flow/svelte';

	let stars = $state(0);

	let interval;

	onMount(async () => {
		const res = await fetch('https://api.github.com/repos/jis3r/icons');
		const data = await res.json();

		interval = setInterval(() => {
			if (stars < data.stargazers_count) {
				stars += 1;
			} else {
				clearInterval(interval);
			}
		}, 1);
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<header
	class="border-text-muted-foreground bg-background bg-opacity-40 fixed top-0 z-50 h-[72px] w-full border-b backdrop-blur-xl"
>
	<nav class="container flex items-center justify-between py-4">
		<a href="/" class="cursor-pointer text-base"> moving icons </a>
		<div class="flex gap-1">
			<Button variant="outline" class="flex gap-2" href="https://github.com/jis3r/icons">
				<Github size="20" />
				<NumberFlow value={stars} />
			</Button>

			<Button onclick={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</nav>
</header>

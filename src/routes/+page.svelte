<script>
	import { Button } from '$lib/components/ui/button';
	import { Sun } from 'lucide-svelte';
	import { Moon } from 'lucide-svelte';
	import ArrowLeft from '$lib/icons/arrowLeft.svelte';
	import ArrowRight from '$lib/icons/arrowRight.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import Expand from '$lib/icons/expand.svelte';

	import { toggleMode } from 'mode-watcher';
</script>

<header class="container flex h-full w-full max-w-7xl items-center justify-between py-4">
	<h1 class="text-base">jis3r/icons</h1>
	<div class="flex gap-1">
		<Button variant="outline" class="flex gap-1" href="https://github.com/jis3r/icons">
			github
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
</header>
<main class="mt-8 flex w-full items-center justify-center sm:mt-16">
	<div class="container max-w-7xl">
		<h1 class="text-balance text-2xl sm:text-3xl">
			beautifully crafted, moving icons. for <span
				class="from-svelte bg-gradient-to-br to-orange-400 bg-clip-text text-transparent"
				>svelte</span
			>.
		</h1>
		<p
			class="text-muted-foreground mt-2 max-w-lg text-pretty text-xs leading-relaxed sm:mt-4 sm:text-sm"
		>
			an open-source collection of smooth, animated icons for your projects. feel free to use them,
			share your feedback, and let's make this library awesome together!
		</p>

		<p class="text-muted-foreground mt-4 text-xs sm:text-sm">
			built with
			<Button
				variant="secondary"
				class="h-[22px] px-2 text-xs font-medium text-orange-600"
				href="https://lucide.dev">lucide</Button
			>
			and inspired by the awesome
			<Button
				variant="secondary"
				class="h-[22px] px-2 text-xs font-medium text-purple-700"
				href="https://github.com/pqoqubbw">@pqoqubbw</Button
			>
		</p>
		<div class="flex gap-1 p-7">
			<ArrowLeft />
			<ArrowRight />
			<Clock />
			<Expand />
		</div>
	</div>
</main>

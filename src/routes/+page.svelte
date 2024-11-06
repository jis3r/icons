<script>
	import { Button } from '$lib/components/ui/button';

	import { Sun } from 'lucide-svelte';
	import { Moon } from 'lucide-svelte';
	import ArrowLeft from '$lib/icons/arrow-left.svelte';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
	import ArrowUp from '$lib/icons/arrow-up.svelte';
	import ArrowDown from '$lib/icons/arrow-down.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import Expand from '$lib/icons/expand.svelte';
	import Unplug from '$lib/icons/unplug.svelte';
	import RefreshCcw from '$lib/icons/refresh-ccw.svelte';
	import Settings from '$lib/icons/settings.svelte';
	import Copy from '$lib/icons/copy.svelte';

	import { toggleMode } from 'mode-watcher';

	let icons = [
		{
			name: 'arrow-left',
			component: ArrowLeft
		},
		{
			name: 'arrow-right',
			component: ArrowRight
		},
		{
			name: 'arrow-up',
			component: ArrowUp
		},
		{
			name: 'arrow-down',
			component: ArrowDown
		},
		{
			name: 'clock',
			component: Clock
		},
		{
			name: 'expand',
			component: Expand
		},
		{
			name: 'unplug',
			component: Unplug
		},
		{
			name: 'refresh-ccw',
			component: RefreshCcw
		},
		{
			name: 'settings',
			component: Settings
		},
		{
			name: 'copy',
			component: Copy
		}
	];
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
				class="bg-gradient-to-br from-svelte to-orange-400 bg-clip-text text-transparent"
				>svelte</span
			>.
		</h1>
		<p
			class="mt-2 max-w-lg text-pretty text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm"
		>
			an open-source collection of smooth, animated icons for your projects. feel free to use them,
			share your feedback, and let's make this library awesome together!
		</p>

		<p class="mt-4 text-xs text-muted-foreground sm:text-sm">
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
		<div class="my-10 flex flex-col gap-6 sm:my-20">
			<div
				class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))]"
			>
				{#each icons as icon}
					<div
						class="flex h-full w-full flex-col items-center justify-center rounded-md border border-input p-3"
					>
						<icon.component
							classes="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
						/>
						<p class="mb-3 mt-5 text-center text-xs text-muted-foreground">{icon.name}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>

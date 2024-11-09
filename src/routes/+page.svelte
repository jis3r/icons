<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';
	import { Sun, Moon, Download, Copy, ExternalLink, Check } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { getIcons, downloadIcon } from '$lib/utils/icons.js';
	import Github from '$lib/components/github.svelte';
	import { fade } from 'svelte/transition';

	let stars = $state(0);
	let iconsAdded = $state(0);
	let icons = [];
	let searchQuery = $state('');
	let filteredIcons = $state(icons);

	$effect(() => {
		searchQuery = searchQuery;
		filteredIcons = icons.filter((icon) =>
			icon.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	});

	onMount(async () => {
		icons = await getIcons();
		filteredIcons = icons;
		const res = await fetch('https://api.github.com/repos/jis3r/icons');
		const data = await res.json();
		stars = data.stargazers_count;

		const lastVisit = localStorage.getItem('lastVisit');
		if (lastVisit) {
			iconsAdded = icons.length - JSON.parse(lastVisit);
		}
		localStorage.setItem('lastVisit', JSON.stringify(icons.length));
	});
</script>

<header class="container flex h-full w-full max-w-7xl items-center justify-between py-4">
	<h1 class="text-base">jis3r/icons</h1>
	<div class="flex gap-1">
		<Button variant="outline" class="flex gap-2" href="https://github.com/jis3r/icons">
			<Github size="20" />
			<span>{stars}</span>
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
			{#if iconsAdded > 0}
				<Badge class="w-fit text-xs">+{iconsAdded} icons since your last visit! 🎉</Badge>
			{/if}
			<Input placeholder="Search {filteredIcons.length} icons..." bind:value={searchQuery}></Input>

			<div
				class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))]"
			>
				{#each filteredIcons as icon}
					<div
						class="flex h-full w-full flex-col items-center justify-center rounded-md border border-input p-3"
					>
						<icon.component
							classes="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
						/>
						<p class="mb-3 mt-5 text-center text-xs text-muted-foreground">{icon.name}</p>
						<div class="flex items-center justify-center gap-2">
							<Button
								on:click={() => {
									navigator.clipboard.writeText(icon.source);
									icon.copied = true;
									setTimeout(() => {
										icon.copied = false;
									}, 1500);
								}}
								variant="ghost"
								class="size-8 cursor-pointer rounded-md p-2 transition-colors duration-200 hover:bg-accent"
							>
								{#if icon.copied}
									<div in:fade={{ duration: 150 }}>
										<Check class="h-4 w-4" />
									</div>
								{:else}
									<div in:fade={{ duration: 150 }}>
										<Copy class="h-4 w-4" />
									</div>
								{/if}
							</Button>
							<Button
								on:click={() => {
									downloadIcon(icon);
									icon.downloaded = true;
									setTimeout(() => {
										icon.downloaded = false;
									}, 1500);
								}}
								variant="ghost"
								class="size-8 cursor-pointer rounded-md p-2 transition-colors duration-200 hover:bg-accent"
							>
								{#if icon.downloaded}
									<div in:fade={{ duration: 150 }}>
										<Check class="h-4 w-4" />
									</div>
								{:else}
									<div in:fade={{ duration: 150 }}>
										<Download class="h-4 w-4" />
									</div>
								{/if}
							</Button>
							<Button
								href={'https://github.com/jis3r/icons/blob/master/src/lib/icons/' +
									icon.name +
									'.svelte'}
								variant="ghost"
								class="size-8 cursor-pointer rounded-md p-2 transition-colors duration-200 hover:bg-accent"
							>
								<ExternalLink class="h-4 w-4" />
							</Button>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<p class="mb-4 text-center text-xs text-muted-foreground">
			built with ❤️ by <a href="https://github.com/jis3r" class="underline">jis3r</a>
		</p>
	</div>
</main>

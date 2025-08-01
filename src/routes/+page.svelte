<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';
	import { Sun, Moon, Download, Copy, ExternalLink, Check, Terminal } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { downloadIcon, preloadIconSources } from '$lib/utils/icons.js';
	import ICONS_LIST from '$lib/icons/index.js';
	import Github from '$lib/components/github.svelte';
	import NumberFlow from '@number-flow/svelte';
	import { debounce } from '$lib/utils/debounce';
	import { animate } from 'motion';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let stars = $state(0);
	let iconsAdded = $state(0);
	let icons = [];
	let searchQuery = $state('');
	let filteredIcons = $state(icons);
	let size = $state(28);
	let color = $state('currentColor');
	let strokeWidth = $state(2);
	let isLoading = $state(true);

	const updateFilteredIcons = (query) => {
		filteredIcons = icons.filter((icon) => {
			const q = query.toLowerCase();
			return (
				icon.name.toLowerCase().includes(q) ||
				icon.tags?.some((tag) => tag.toLowerCase().includes(q)) ||
				icon.categories?.some((category) => category.toLowerCase().includes(q))
			);
		});
	};

	const debouncedUpdateFilteredIcons = debounce(updateFilteredIcons, 300);

	const handleCopy = (icon) => {
		try {
			if (!icon.source) {
				console.error('Icon source not available:', icon.name);
				return;
			}

			navigator.clipboard.writeText(icon.source).catch((err) => {
				console.error('Failed to copy to clipboard:', err);
			});

			icon.copied = true;
			setTimeout(() => {
				icon.copied = false;
			}, 1500);
		} catch (err) {
			console.error('Failed to copy icon:', err);
		}
	};

	const handleDownload = (icon) => {
		downloadIcon(icon)
			.then(() => {
				icon.downloaded = true;
				setTimeout(() => {
					icon.downloaded = false;
				}, 1500);
			})
			.catch((err) => {
				console.error('Failed to download icon:', err);
			});
	};

	const handleTerminalCopy = (icon) => {
		try {
			if (!icon.source) {
				console.error('Icon source not available:', icon.name);
				return;
			}

			const command = `npx shadcn-svelte@latest add https://movingicons.dev/r/${icon.name}.json`;
			navigator.clipboard.writeText(command).catch((err) => {
				console.error('Failed to copy terminal command to clipboard:', err);
			});

			icon.terminalCopied = true;
			setTimeout(() => {
				icon.terminalCopied = false;
			}, 1500);
		} catch (err) {
			console.error('Failed to copy terminal command:', err);
		}
	};

	function animateIcon(node, { visible }) {
		let animation;
		const show = () => {
			animation = animate(
				node,
				{ opacity: [0, 1], scale: [0, 1] },
				{ duration: 0.25, easing: 'ease-out' }
			);
		};
		const hide = () => {
			animation = animate(
				node,
				{ opacity: [1, 0], scale: [1, 0] },
				{ duration: 0.25, easing: 'ease-in' }
			);
		};

		if (visible) show();
		else hide();

		return {
			update({ visible }) {
				if (visible) show();
				else hide();
			},
			destroy() {
				if (animation) animation.cancel();
			}
		};
	}

	onMount(async () => {
		try {
			icons = ICONS_LIST;
			filteredIcons = icons;

			const res = await fetch('https://api.github.com/repos/jis3r/icons');
			if (!res.ok) throw new Error('Failed to fetch GitHub stars');
			const data = await res.json();

			const interval = setInterval(() => {
				if (stars < data.stargazers_count) {
					stars += 1;
				} else {
					clearInterval(interval);
				}
			}, 10);

			const lastVisit = localStorage.getItem('lastVisit');
			if (lastVisit) {
				iconsAdded = icons.length - JSON.parse(lastVisit);
			}
			localStorage.setItem('lastVisit', JSON.stringify(icons.length));

			preloadIconSources(icons)
				.then((updatedIcons) => {
					icons = updatedIcons;
					filteredIcons = icons;
				})
				.catch((err) => {
					console.error('Failed to preload icons:', err);
				});
		} catch (err) {
			console.error(err);
		} finally {
			isLoading = false;
		}
	});
</script>

<svelte:window
	onkeydown={(e) => {
		const searchbar = document.getElementById('searchbar');

		if (e.key === 'k' && e.metaKey) {
			searchbar.focus();
		}

		if (e.key === 'Escape') {
			searchbar.blur();
		}
	}}
/>

<header class="container flex h-full w-full max-w-7xl items-center justify-between py-4">
	<h1 class="text-base">moving icons</h1>
	<div class="flex gap-1">
		<Button variant="outline" class="flex gap-2" href="https://github.com/jis3r/icons">
			<Github size="20" />
			<NumberFlow value={stars} />
		</Button>

		<Button onclick={toggleMode} variant="outline" size="icon">
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

			<div class="relative">
				<Input
					id="searchbar"
					placeholder="Search {filteredIcons.length} icons..."
					bind:value={searchQuery}
					oninput={() => debouncedUpdateFilteredIcons(searchQuery)}
				></Input>
				<kbd
					class="pointer-events-none absolute right-2 top-1/2 inline-flex h-5 -translate-y-1/2 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
					><span class="text-xs">⌘</span>K</kbd
				>
			</div>

			{#if isLoading}
				<div class="flex items-center justify-center py-12">
					<div class="text-muted-foreground">Loading icons...</div>
				</div>
			{:else if filteredIcons.length === 0}
				<div class="flex flex-col items-center justify-center gap-2 py-24 text-center">
					<h2 class="text-lg">No icons found</h2>
					<p class="max-w-sm text-pretty text-center text-xs text-muted-foreground">
						We couldn't find any icons matching your search.<br />Try different keywords.
					</p>
				</div>
			{:else}
				<div
					class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))]"
				>
					{#each filteredIcons as icon}
						<div
							class="flex h-full w-full flex-col items-center justify-center rounded-md border border-input p-3"
						>
							<icon.icon
								{size}
								{color}
								{strokeWidth}
								class="flex select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
							/>
							<p class="mb-3 mt-5 text-center text-xs text-muted-foreground">{icon.name}</p>
							<div class="flex items-center justify-center gap-2">
								<Tooltip.Provider delayDuration={100}>
									<Tooltip.Root>
										<Tooltip.Trigger asChild>
											<Button
												onclick={() => handleCopy(icon)}
												variant="ghost"
												class="size-8 rounded-md p-2 transition-colors duration-200 hover:bg-accent"
											>
												{#key icon.copied}
													<span use:animateIcon={{ visible: true }} style="display: inline-block;">
														{#if icon.copied}
															<Check class="h-4 w-4" />
														{:else}
															<Copy class="h-4 w-4" />
														{/if}
													</span>
												{/key}
											</Button>
										</Tooltip.Trigger>
										<Tooltip.Content side="bottom">
											<p class="text-xs">Copy code</p>
										</Tooltip.Content>
									</Tooltip.Root>
								</Tooltip.Provider>

								<Tooltip.Provider delayDuration={100}>
									<Tooltip.Root>
										<Tooltip.Trigger asChild>
											<Button
												onclick={() => handleDownload(icon)}
												variant="ghost"
												class="size-8 rounded-md p-2 transition-colors duration-200 hover:bg-accent"
											>
												{#key icon.downloaded}
													<span use:animateIcon={{ visible: true }} style="display: inline-block;">
														{#if icon.downloaded}
															<Check class="h-4 w-4" />
														{:else}
															<Download class="h-4 w-4" />
														{/if}
													</span>
												{/key}
											</Button>
										</Tooltip.Trigger>
										<Tooltip.Content side="bottom">
											<p class="text-xs">Download .svelte</p>
										</Tooltip.Content>
									</Tooltip.Root>
								</Tooltip.Provider>

								{#if false}
									<Button
										href={'https://github.com/jis3r/icons/blob/master/src/lib/icons/' +
											icon.name +
											'.svelte'}
										variant="ghost"
										class="size-8 rounded-md p-2 transition-colors duration-200 hover:bg-accent"
									>
										<ExternalLink class="h-4 w-4" />
									</Button>
								{/if}

								<Tooltip.Provider delayDuration={100}>
									<Tooltip.Root>
										<Tooltip.Trigger asChild>
											<Button
												onclick={() => handleTerminalCopy(icon)}
												variant="ghost"
												class="size-8 rounded-md p-2 transition-colors duration-200 hover:bg-accent"
											>
												{#key icon.terminalCopied}
													<span use:animateIcon={{ visible: true }} style="display: inline-block;">
														{#if icon.terminalCopied}
															<Check class="h-4 w-4" />
														{:else}
															<Terminal class="h-4 w-4" />
														{/if}
													</span>
												{/key}
											</Button>
										</Tooltip.Trigger>
										<Tooltip.Content side="bottom">
											<p class="text-xs">Copy shadcn-svelte/cli command</p>
										</Tooltip.Content>
									</Tooltip.Root>
								</Tooltip.Provider>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<p class="mb-4 text-center text-xs text-muted-foreground">
			built with ❤️ by <a href="https://github.com/jis3r" class="underline">@jis3r</a>
		</p>
	</div>
</main>

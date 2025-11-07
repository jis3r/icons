<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';
	import { Download, Copy, ExternalLink, Check, Terminal } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { downloadIcon, preloadIconSources } from '$lib/utils/icons.js';
	import ICONS_LIST from '$lib/icons/index.js';
	import { debounce } from '$lib/utils/debounce';
	import { animate } from 'motion';
	import { page } from '$app/state';

	let iconsAdded = $state(0);
	let icons = [];
	let searchQuery = $state('');
	let filteredIcons = $state([]);
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

			if (page.url.searchParams.has('search')) {
				const searchParam = page.url.searchParams.get('search');
				searchQuery = searchParam;
				updateFilteredIcons(searchParam);
			} else {
				filteredIcons = icons;
			}

			const lastVisit = localStorage.getItem('lastVisit');
			if (lastVisit) {
				iconsAdded = icons.length - JSON.parse(lastVisit);
			}
			localStorage.setItem('lastVisit', JSON.stringify(icons.length));

			preloadIconSources(icons)
				.then((updatedIcons) => {
					icons = updatedIcons;

					if (searchQuery) {
						updateFilteredIcons(searchQuery);
					} else {
						filteredIcons = icons;
					}
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
			e.preventDefault();
			searchbar.focus();
		}

		if (e.key === 'Escape') {
			searchbar.blur();
		}
	}}
/>

<main class="mt-8 flex w-full items-center justify-center sm:mt-16">
	<div class="container max-w-7xl pt-6">
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
					class="bg-muted text-muted-foreground pointer-events-none absolute top-1/2 right-2 inline-flex h-5 -translate-y-1/2 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none"
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
					<p class="text-muted-foreground max-w-sm text-center text-xs text-pretty">
						We couldn't find any icons matching your search.<br />Try different keywords.
					</p>
				</div>
			{:else}
				<div
					class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))]"
				>
					{#each filteredIcons as icon}
						<div
							class="border-input flex h-full w-full flex-col items-center justify-center rounded-md border p-3"
						>
							<icon.icon
								{size}
								{color}
								{strokeWidth}
								class="hover:bg-accent flex items-center justify-center rounded-md p-2 transition-colors duration-200 select-none"
							/>
							<p class="text-muted-foreground mt-5 mb-3 text-center text-xs">{icon.name}</p>
							<div class="flex items-center justify-center gap-2">
								<Button
									onclick={() => handleCopy(icon)}
									variant="ghost"
									class="hover:bg-accent size-8 rounded-md p-2 transition-colors duration-200"
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

								<Button
									onclick={() => handleDownload(icon)}
									variant="ghost"
									class="hover:bg-accent size-8 rounded-md p-2 transition-colors duration-200"
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

								{#if false}
									<Button
										href={'https://github.com/jis3r/icons/blob/master/src/lib/icons/' +
											icon.name +
											'.svelte'}
										variant="ghost"
										class="hover:bg-accent size-8 rounded-md p-2 transition-colors duration-200"
									>
										<ExternalLink class="h-4 w-4" />
									</Button>
								{/if}

								<Button
									onclick={() => handleTerminalCopy(icon)}
									variant="ghost"
									class="hover:bg-accent size-8 rounded-md p-2 transition-colors duration-200"
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
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<p class="text-muted-foreground mb-4 text-center text-xs">
			built with ❤️ by <a href="https://github.com/jis3r" class="underline">@jis3r</a>
		</p>
	</div>
</main>

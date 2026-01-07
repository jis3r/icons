<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Download, Copy, ExternalLink, Check, Terminal } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { downloadIcon, preloadIconSources } from '$lib/utils/icons.js';
	import ICONS_LIST from '$lib/icons/index.js';
	import { debounce } from '$lib/utils/debounce';
	import { animate } from 'motion';
	import { page } from '$app/state';

	let iconsAdded = $state(0);
	/** @type {(typeof ICONS_LIST[number] & { source?: string })[]} */
	let icons = $state([]);
	let searchQuery = $state('');
	/** @type {typeof icons} */
	let filteredIcons = $state([]);
	let size = $state(28);
	let color = $state('currentColor');
	let strokeWidth = $state(2);
	let isLoading = $state(true);

	/** @param {string} query */
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

	/** @param {typeof icons[number]} icon */
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

	/** @param {typeof icons[number]} icon */
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

	/** @param {typeof icons[number]} icon */
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

	/**
	 * @template {{ visible?: boolean }} T
	 * @param {HTMLElement} node
	 * @param {T} param
	 */
	function animateIcon(node, { visible }) {
		/** @type {ReturnType<typeof animate>} */
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
			/** @param {T} param */
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
			if (searchbar) {
				searchbar.focus();
				searchbar.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		}

		if (e.key === 'Escape') {
			searchbar?.blur();
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
					placeholder="Search {icons.length} icons..."
					bind:value={searchQuery}
					oninput={() => debouncedUpdateFilteredIcons(searchQuery)}
				/>
				<kbd
					class="bg-muted text-muted-foreground pointer-events-none absolute top-1/2 right-2 inline-flex h-5 -translate-y-1/2 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none"
					><span class="text-xs">⌘</span>K</kbd
				>
			</div>

			{#if isLoading}
				<div class="flex items-center justify-center py-12">
					<div class="text-muted-foreground">Loading icons...</div>
				</div>
			{:else}
				<div
					class={{
						'grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))]':
							filteredIcons.length
					}}
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
								<Tooltip.Provider delayDuration={300}>
									<Tooltip.Root>
										<Tooltip.Trigger>
											{#snippet child({ props })}
												<Button
													{...props}
													onclick={() => handleCopy(icon)}
													variant="ghost"
													class="hover:bg-accent size-8 rounded-md p-2 transition-colors duration-200"
												>
													{#key icon.copied}
														<span use:animateIcon={{ visible: true }} class="inline-block">
															{#if icon.copied}
																<Check class="size-4" />
															{:else}
																<Copy class="size-4" />
															{/if}
														</span>
													{/key}
												</Button>
											{/snippet}
										</Tooltip.Trigger>
										<Tooltip.Content side="bottom">Copy Svelte component</Tooltip.Content>
									</Tooltip.Root>

									<Tooltip.Root>
										<Tooltip.Trigger>
											{#snippet child({ props })}
												<Button
													{...props}
													onclick={() => handleDownload(icon)}
													variant="ghost"
													class="hover:bg-accent size-8 rounded-md p-2 transition-colors duration-200"
												>
													{#key icon.downloaded}
														<span use:animateIcon={{ visible: true }} class="inline-block">
															{#if icon.downloaded}
																<Check class="size-4" />
															{:else}
																<Download class="size-4" />
															{/if}
														</span>
													{/key}
												</Button>
											{/snippet}
										</Tooltip.Trigger>
										<Tooltip.Content side="bottom">Download Svelte component</Tooltip.Content>
									</Tooltip.Root>

									{#if false}
										<Tooltip.Root>
											<Tooltip.Trigger>
												{#snippet child({ props })}
													<Button
														{...props}
														href="https://github.com/jis3r/icons/blob/master/src/lib/icons/{icon.name}.svelte"
														variant="ghost"
														class="hover:bg-accent size-8 rounded-md p-2 transition-colors duration-200"
													>
														<ExternalLink class="size-4" />
													</Button>
												{/snippet}
											</Tooltip.Trigger>
											<Tooltip.Content side="bottom">Open icon source on GitHub</Tooltip.Content>
										</Tooltip.Root>
									{/if}

									<Tooltip.Root>
										<Tooltip.Trigger>
											{#snippet child({ props })}
												<Button
													{...props}
													onclick={() => handleTerminalCopy(icon)}
													variant="ghost"
													class="hover:bg-accent size-8 rounded-md p-2 transition-colors duration-200"
												>
													{#key icon.terminalCopied}
														<span use:animateIcon={{ visible: true }} class="inline-block">
															{#if icon.terminalCopied}
																<Check class="size-4" />
															{:else}
																<Terminal class="size-4" />
															{/if}
														</span>
													{/key}
												</Button>
											{/snippet}
										</Tooltip.Trigger>
										<Tooltip.Content side="bottom">Copy `shadcn add` command</Tooltip.Content>
									</Tooltip.Root>
								</Tooltip.Provider>
							</div>
						</div>
					{:else}
						<div class="flex flex-col items-center justify-center gap-2 py-24 text-center">
							<h2 class="text-lg">No icons found</h2>
							<p class="text-muted-foreground max-w-sm text-center text-xs text-pretty">
								We couldn't find any icons matching your search.<br />Try different keywords.
							</p>
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

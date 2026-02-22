<script lang="ts">
	import { Button } from '$lib-docs/components/ui/button/index.js';
	import * as ContextMenu from '$lib-docs/components/ui/context-menu/index.js';
	import { Sun, Moon, Feather } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { onMount, onDestroy } from 'svelte';
	import Github from '$lib-docs/components/github.svelte';
	import NumberFlow from '@number-flow/svelte';
	import iflog from 'iflog';

	function downloadLogoSvg() {
		const a = document.createElement('a');
		a.href = '/moving_icons_logo.svg';
		a.download = 'moving_icons_logo.svg';
		a.click();
	}

	let stars = $state(0);
	/** @type {ReturnType<typeof setInterval>} */
	let interval;

	onMount(async () => {
		try {
			const res = await fetch('https://api.github.com/repos/jis3r/icons');
			if (!res.ok) {
				throw new Error(`GitHub API error: ${res.status}`);
			}
			/** @type {{ stargazers_count?: number }} */
			const data = await res.json();

			const targetStars = data.stargazers_count ?? 0;
			if (targetStars === 0) return;

			const maxIncrement = Math.max(5, Math.ceil(targetStars / 30));
			const delay = 10;

			interval = setInterval(() => {
				if (stars < targetStars) {
					const remaining = targetStars - stars;
					const progress = remaining / targetStars;
					const easeOutFactor = progress * progress;
					const currentIncrement = Math.max(1, Math.ceil(maxIncrement * easeOutFactor));

					stars = Math.min(stars + currentIncrement, targetStars);
				} else {
					clearInterval(interval);
				}
			}, delay);
		} catch (err) {
			iflog.error('Failed to fetch GitHub stars:', err);
			stars = 312;
		}
	});

	onDestroy(() => clearInterval(interval));
</script>

<header
	class="bg-background bg-opacity-40 fixed top-0 z-50 h-[72px] w-full border-b backdrop-blur-xl"
>
	<nav class="container mx-auto flex max-w-7xl items-center justify-between py-4">
		<ContextMenu.Root>
			<ContextMenu.Trigger
				class="inline-flex cursor-pointer items-center gap-1.5 text-base leading-none"
			>
				<a href="/" class="inline-flex items-center gap-1.5 leading-none">
					<Feather size={18} class="shrink-0" />
					<span class="leading-none">moving icons</span>
				</a>
			</ContextMenu.Trigger>
			<ContextMenu.Content
				class="w-48"
				portalProps={{}}
				side="bottom"
				align="start"
				sideOffset={6}
			>
				<ContextMenu.Item class="" inset={false} onSelect={downloadLogoSvg}>
					Download SVG
				</ContextMenu.Item>
			</ContextMenu.Content>
		</ContextMenu.Root>

		<div class="flex gap-1">
			<Button
				variant="outline"
				class="flex w-[85px] justify-between gap-2"
				href="https://github.com/jis3r/icons"
			>
				<Github size="20" />
				<NumberFlow value={stars} />
			</Button>

			<Button onclick={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</nav>
</header>

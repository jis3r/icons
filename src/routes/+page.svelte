<script>
	import { onMount } from 'svelte';
	import { getIcons } from '$lib/utils/icons.js';
	import Marquee from 'svelte-fast-marquee';
	import {
		Activity,
		AlarmClock,
		Folder,
		Award,
		User,
		Axe,
		Mail,
		Phone,
		MapPin,
		Map,
		BadgeCheck,
		Coins,
		BatteryCharging,
		File,
		Bell,
		Bone,
		Book,
		Cog,
		Cctv,
		ChartBar,
		ChartPie,
		CigaretteOff,
		Clock,
		Compass,
		Drum,
		WineOff,
		Gauge,
		Frame,
		Nfc,
		Orbit,
		Plane,
		Rainbow,
		Tornado,
		Scissors,
		Feather
	} from 'lucide-svelte';

	let iconsAdded = $state(0);
	let icons = [];
	let filteredIcons = $state(icons);

	const allIcons = [
		Activity,
		AlarmClock,
		Folder,
		Award,
		User,
		Axe,
		Mail,
		Phone,
		MapPin,
		Map,
		BadgeCheck,
		Coins,
		BatteryCharging,
		File,
		Bell,
		Bone,
		Book,
		Cog,
		Cctv,
		ChartBar,
		ChartPie,
		CigaretteOff,
		Clock,
		Rainbow,
		Compass,
		Drum,
		WineOff,
		Gauge,
		Frame,
		Nfc,
		Orbit,
		Plane,
		Tornado,
		Scissors
	];

	function shuffleArray(array) {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	const marquee1Icons = $state(shuffleArray(allIcons));
	const marquee2Icons = $state(shuffleArray(allIcons));
	const marquee3Icons = $state(shuffleArray(allIcons));
	const marquee4Icons = $state(shuffleArray(allIcons));

	onMount(async () => {
		icons = await getIcons();
		filteredIcons = icons;

		const lastVisit = localStorage.getItem('lastVisit');
		if (lastVisit) {
			iconsAdded = icons.length - JSON.parse(lastVisit);
		}
		localStorage.setItem('lastVisit', JSON.stringify(icons.length));
	});
</script>

<main class="flex min-h-screen w-full items-center justify-center">
	<div class="container max-w-7xl">
		<div class="relative mx-auto grid max-w-6xl gap-4">
			<div
				class="border-800 pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-36 min-h-36 w-36 min-w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border bg-opacity-50 backdrop-blur-lg"
			>
				<Feather size={96} class="text-foreground" />
			</div>
			<div
				class="pointer-events-none absolute left-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-32 md:w-64"
			></div>
			<div
				class="pointer-events-none absolute right-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-32 md:w-64"
			></div>

			<div
				class="pointer-events-none absolute bottom-0 z-10 h-16 w-full bg-gradient-to-t from-background to-transparent sm:h-32"
			></div>

			<div
				class="pointer-events-none absolute top-0 z-10 h-16 w-full bg-gradient-to-b from-background to-transparent sm:h-32"
			></div>

			<Marquee gap="24px" speed={20} startOffset={0}>
				{#each marquee1Icons as Icon}
					<div
						class="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
					>
						<Icon size={24} class="text-muted-foreground" />
					</div>
				{/each}
			</Marquee>

			<Marquee gap="24px" speed={24} startOffset={-100}>
				{#each marquee2Icons as Icon}
					<div
						class="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
					>
						<Icon size={24} class="text-muted-foreground" />
					</div>
				{/each}
			</Marquee>

			<Marquee gap="24px" speed={16} startOffset={-200}>
				{#each marquee3Icons as Icon}
					<div
						class="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
					>
						<Icon size={24} class="text-muted-foreground" />
					</div>
				{/each}
			</Marquee>

			<Marquee gap="24px" speed={28} startOffset={-300}>
				{#each marquee4Icons as Icon}
					<div
						class="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
					>
						<Icon size={24} class="text-muted-foreground" />
					</div>
				{/each}
			</Marquee>
		</div>

		<h1
			class="mx-auto w-fit max-w-5xl text-balance text-center text-3xl font-semibold sm:text-4xl md:text-5xl"
		>
			beautifully crafted, moving icons. for <span
				class="bg-gradient-to-br from-svelte to-orange-400 bg-clip-text text-transparent"
				>svelte</span
			>.
		</h1>
		<p
			class="mx-auto mt-5 w-fit max-w-2xl text-pretty text-center text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base"
		>
			a collection of animated icons for your projects. feel free to use them, share your feedback,
			and let's make this library awesome together!
		</p>
	</div>
</main>

<footer class="mt-16">
	<p class="mb-4 text-center text-xs text-muted-foreground">
		built with ❤️ by <a href="https://github.com/jis3r" class="underline">@jis3r</a>
	</p>
</footer>

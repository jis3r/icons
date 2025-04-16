<script>
	import { onMount } from 'svelte';
	import Marquee from 'svelte-fast-marquee';
	import { fade } from 'svelte/transition';
	import {
		Activity,
		AlarmClock,
		AlignCenter,
		Anvil,
		Archive,
		ArrowUp01,
		Atom,
		BarChart,
		Bed,
		Axe,
		BadgeAlert,
		BadgeCheck,
		BadgePercent,
		BookOpen,
		Folder,
		Award,
		User,
		Mail,
		Phone,
		MapPin,
		Map,
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
		Feather,
		Bolt,
		Cloud,
		Bookmark,
		CircleAlert,
		Kanban,
		Key,
		Lock,
		Diff,
		Cpu,
		Vote,
		Wifi,
		Webhook,
		Users,
		Upload,
		Download,
		ThumbsUp,
		ThumbsDown,
		Telescope,
		Terminal,
		Sun,
		SpellCheck,
		SquarePen,
		Speech,
		Shrink,
		ShowerHead,
		Shovel,
		Ship,
		ShipWheel,
		Search,
		ScanText,
		Route,
		Rocket,
		Redo,
		Undo,
		PrinterCheck,
		FileCode,
		Code,
		PackageOpen,
		Brush
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	let mounted = $state(false);

	const allIcons = [
		Activity,
		AlarmClock,
		AlignCenter,
		Anvil,
		Archive,
		ArrowUp01,
		Atom,
		BarChart,
		Bed,
		Axe,
		BadgeAlert,
		BadgeCheck,
		BadgePercent,
		BookOpen,
		Folder,
		Award,
		User,
		Mail,
		Phone,
		MapPin,
		Map,
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
		Feather,
		Bolt,
		Cloud,
		Bookmark,
		CircleAlert,
		Kanban,
		Key,
		Lock,
		Diff,
		Cpu,
		Vote,
		Wifi,
		Webhook,
		Users,
		Upload,
		Download,
		ThumbsUp,
		ThumbsDown,
		Telescope,
		Terminal,
		Sun,
		SpellCheck,
		SquarePen,
		Speech,
		Shrink,
		ShowerHead,
		Shovel,
		Ship,
		ShipWheel,
		Search,
		ScanText,
		Route,
		Rocket,
		Redo,
		Undo,
		PrinterCheck,
		FileCode,
		Code,
		PackageOpen,
		Brush
	];

	function shuffleArray(array) {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	const shuffledIcons = shuffleArray(allIcons);
	const chunkSize = Math.ceil(shuffledIcons.length / 4);

	const marquee1Icons = $state(shuffledIcons.slice(0, chunkSize));
	const marquee2Icons = $state(shuffledIcons.slice(chunkSize, chunkSize * 2));
	const marquee3Icons = $state(shuffledIcons.slice(chunkSize * 2, chunkSize * 3));
	const marquee4Icons = $state(shuffledIcons.slice(chunkSize * 3));

	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 1);
	});
</script>

<main class="flex w-full flex-col">
	<section class="flex min-h-screen w-full flex-1 items-center" id="hero">
		<div class="container max-w-7xl">
			<div class="relative mx-auto grid max-w-6xl gap-4">
				{#if mounted}
					<div
						in:fade={{ duration: 200 }}
						class="border-800 pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-36 min-h-36 w-36 min-w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border bg-opacity-50 backdrop-blur-lg"
					>
						<div>
							<Feather size={96} class="text-foreground" />
						</div>
					</div>
				{/if}
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

				<Marquee gap="24px" speed={20} class="min-h-14">
					{#each marquee1Icons as Icon, i}
						{#if mounted}
							<div
								in:fade={{ delay: Math.random() * 1500, duration: 400 }}
								class="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
							>
								<Icon size={24} class="text-muted-foreground" />
							</div>
						{/if}
					{/each}
				</Marquee>

				<Marquee gap="24px" speed={24} class="min-h-14">
					{#each marquee2Icons as Icon, i}
						{#if mounted}
							<div
								in:fade={{ delay: Math.random() * 1500, duration: 400 }}
								class="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
							>
								<Icon size={24} class="text-muted-foreground" />
							</div>
						{/if}
					{/each}
				</Marquee>

				<Marquee gap="24px" speed={16} class="min-h-14">
					{#each marquee3Icons as Icon, i}
						{#if mounted}
							<div
								in:fade={{ delay: Math.random() * 1500, duration: 400 }}
								class="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
							>
								<Icon size={24} class="text-muted-foreground" />
							</div>
						{/if}
					{/each}
				</Marquee>

				<Marquee gap="24px" speed={28} class="min-h-14">
					{#each marquee4Icons as Icon, i}
						{#if mounted}
							<div
								in:fade={{ delay: Math.random() * 1500, duration: 400 }}
								class="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
							>
								<Icon size={24} class="text-muted-foreground" />
							</div>
						{/if}
					{/each}
				</Marquee>
			</div>

			{#if mounted}
				<div class="flex flex-col items-center">
					<h1
						in:fade={{ delay: 500, duration: 1500 }}
						class="mx-auto mt-8 w-fit max-w-5xl text-balance text-center text-3xl font-semibold sm:text-4xl md:text-5xl"
					>
						Beautifully crafted, moving icons. For <span
							class="bg-gradient-to-br from-svelte to-orange-400 bg-clip-text text-transparent"
							>Svelte</span
						>.
					</h1>
					<p
						in:fade={{ delay: 750, duration: 1500 }}
						class="mx-auto mt-5 w-fit max-w-2xl text-pretty text-center text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base"
					>
						A collection of animated icons for your projects. Feel free to use them, share your
						feedback, or contribute. Let's make this library awesome together!
					</p>

					<div in:fade={{ delay: 1000, duration: 1500 }}>
						<Button href="/icons" variant="outline" class="mx-auto mt-4">
							<Search size={16} />
							Browse icons</Button
						>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<section class="container max-w-7xl" id="features">
		<div class="grid grid-cols-2 gap-4 gap-8 border-t pt-8 text-center md:grid-cols-4">
			<div class="flex flex-col text-left">
				<span
					class="items-left mb-2 flex flex-col gap-2 text-sm text-foreground sm:flex-row sm:items-center"
				>
					<Code size={16} class="min-h-4 min-w-4" />
					Open source
				</span>
				<p class="text-sm text-muted-foreground">All icons licensed under the MIT license.</p>
			</div>
			<div class="flex flex-col text-left">
				<span
					class="items-left mb-2 flex flex-col gap-2 text-sm text-foreground sm:flex-row sm:items-center"
				>
					<PackageOpen size={16} class="min-h-4 min-w-4" />
					Zero dependencies
				</span>
				<p class="text-sm text-muted-foreground">Built with vanilla Svelte, JS and CSS.</p>
			</div>
			<div class="flex flex-col text-left">
				<span
					class="items-left mb-2 flex flex-col gap-2 text-sm text-foreground sm:flex-row sm:items-center"
				>
					<Brush size={16} class="min-h-4 min-w-4" />
					Customizable
				</span>
				<p class="text-sm text-muted-foreground">Adjust colours, size, and stroke width.</p>
			</div>
			<div class="flex flex-col text-left">
				<span
					class="items-left mb-2 flex flex-col gap-2 text-sm text-foreground sm:flex-row sm:items-center"
				>
					<Feather size={16} class="min-h-4 min-w-4" />
					Lightweight
				</span>
				<p class="text-sm text-muted-foreground">Copy only the icons you need. No overhead.</p>
			</div>
		</div>
	</section>

	<footer class="mt-16">
		<p class="mb-4 text-center text-xs text-muted-foreground">
			built with ❤️ by <a href="https://github.com/jis3r" class="underline">@jis3r</a>
		</p>
	</footer>
</main>

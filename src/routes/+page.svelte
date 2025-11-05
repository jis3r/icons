<script>
	import { onMount } from 'svelte';
	import Marquee from 'svelte-fast-marquee';
	import { fade } from 'svelte/transition';
	import { animate } from 'motion';
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
		PrinterCheck
	} from '@lucide/svelte';

	let iconsAdded = $state(0);
	let icons = [];
	let filteredIcons = $state(icons);
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
		PrinterCheck
	];

	function shuffleArray(array) {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	// Shuffle all icons once and then split them evenly
	const shuffledIcons = shuffleArray(allIcons);
	const chunkSize = Math.ceil(shuffledIcons.length / 4);

	const marquee1Icons = $state(shuffledIcons.slice(0, chunkSize));
	const marquee2Icons = $state(shuffledIcons.slice(chunkSize, chunkSize * 2));
	const marquee3Icons = $state(shuffledIcons.slice(chunkSize * 2, chunkSize * 3));
	const marquee4Icons = $state(shuffledIcons.slice(chunkSize * 3));

	onMount(() => {
		animate(
			'.hero-logo',
			{
				opacity: 1,
				transform: ['translate(calc(-50% + 2px), calc(-50% + 20px))', 'translate(-50%, -50%)'],
				filter: ['blur(10px)', 'blur(0px)']
			},
			{ delay: 0.25, duration: 0.8, easing: [0.16, 1, 0.3, 1] }
		);

		setTimeout(() => {
			mounted = true;
		}, 400);

		animate(
			'.hero-title span, .hero-description',
			{ opacity: 1, y: [20, 0], x: [2, 0], filter: ['blur(10px)', 'blur(0px)'] },
			{ delay: (i) => 0.9 + i * 0.05, duration: 0.8, easing: [0.16, 1, 0.3, 1] }
		);
	});
</script>

<main class="flex min-h-screen w-full items-center">
	<div class="container max-w-7xl">
		<div class="relative mx-auto grid max-w-6xl gap-4">
			<div
				class="hero-logo border-800 pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-36 min-h-36 w-36 min-w-36 items-center justify-center rounded-3xl border bg-opacity-50 backdrop-blur-lg"
			>
				<div>
					<Feather size={96} class="text-foreground" />
				</div>
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

		<h1
			class="hero-title mx-auto mt-8 w-fit max-w-5xl text-balance text-center text-3xl font-semibold sm:text-4xl md:text-5xl"
		>
			<span>beautifully</span> <span>crafted,</span> <span>moving</span> <span>icons.</span>
			<span>for</span>
			<span class="bg-gradient-to-br from-svelte to-orange-400 bg-clip-text text-transparent"
				>svelte</span
			><span>.</span>
		</h1>
		<p
			class="hero-description mx-auto mt-5 w-fit max-w-2xl text-pretty text-center text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base"
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

<style>
	.hero-logo {
		opacity: 0;
		filter: blur(10px);
	}

	.hero-title span {
		display: inline-block;
		opacity: 0;
		filter: blur(10px);
	}

	.hero-description {
		opacity: 0;
		filter: blur(10px);
	}
</style>

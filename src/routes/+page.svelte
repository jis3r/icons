<script>
	import { onMount } from 'svelte';
	import Marquee from 'svelte-fast-marquee';
	import { animate } from 'motion';
	import { Button } from '$lib/components/ui/button';
	import {
		Activity,
		AlarmClock,
		Anvil,
		Archive,
		ArrowUp01,
		Infinity,
		RockingChair,
		Axe,
		BadgeAlert,
		BadgeCheck,
		BadgeQuestionMark,
		BookMarked,
		Boxes,
		Award,
		UserPen,
		MailCheck,
		Radio,
		GalleryHorizontalEnd,
		Landmark,
		HandCoins,
		BatteryCharging,
		FileStack,
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
		CloudDownload,
		BookmarkCheck,
		CircleAlert,
		Kanban,
		Key,
		ShieldCheck,
		Diff,
		Cpu,
		Vote,
		Wifi,
		ServerCog,
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
		Code,
		Package,
		SlidersHorizontal
	} from '@lucide/svelte';

	const allIcons = [
		Activity,
		AlarmClock,
		Anvil,
		Archive,
		ArrowUp01,
		Infinity,
		RockingChair,
		Axe,
		BadgeAlert,
		BadgeCheck,
		BadgeQuestionMark,
		BookMarked,
		Boxes,
		Award,
		UserPen,
		MailCheck,
		Radio,
		GalleryHorizontalEnd,
		Landmark,
		HandCoins,
		BatteryCharging,
		FileStack,
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
		Bolt,
		CloudDownload,
		BookmarkCheck,
		CircleAlert,
		Kanban,
		Key,
		ShieldCheck,
		Diff,
		Cpu,
		Vote,
		Wifi,
		ServerCog,
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
		if (page.url.searchParams.has('search')) {
			const searchParam = page.url.searchParams.get('search');
			goto(`/icons?search=${encodeURIComponent(searchParam)}`, { replaceState: true });
			return;
		}

		const allMarqueeIcons = document.querySelectorAll('.marquee-icon');
		const delays = Array.from(allMarqueeIcons).map(() => Math.random() * 1500);

		const sortedDelays = [...delays].sort((a, b) => a - b);
		const medianDelay = sortedDelays[Math.floor(sortedDelays.length / 6)];

		allMarqueeIcons.forEach((icon, i) => {
			animate(
				icon,
				{ opacity: [0, 1] },
				{ delay: delays[i] / 1000, duration: 0.4, easing: [0.42, 0, 0.58, 1] }
			);
		});

		setTimeout(() => {
			const logo = document.querySelector('.hero-logo');
			const titleSpans = document.querySelectorAll('.hero-title span');
			const description = document.querySelector('.hero-description');
			const button = document.querySelector('.hero-button');

			const allElements = [logo, ...Array.from(titleSpans), description, button].filter(Boolean);

			allElements.forEach((element, i) => {
				if (i === 0) {
					animate(
						element,
						{
							opacity: 1,
							transform: [
								'translate(calc(-50% + 2px), calc(-50% + 20px))',
								'translate(-50%, -50%)'
							],
							filter: ['blur(10px)', 'blur(0px)']
						},
						{ delay: 0.125, duration: 0.8, easing: [0.16, 1, 0.3, 1] }
					);
				} else {
					const startDelay = 0.125 + 0.4 + (i - 1) * 0.05; // Logo delay + half duration + stagger
					animate(
						element,
						{ opacity: 1, y: [20, 0], x: [2, 0], filter: ['blur(10px)', 'blur(0px)'] },
						{ delay: startDelay, duration: 0.8, easing: [0.16, 1, 0.3, 1] }
					);
				}
			});

			const lastHeroDelay = 0.125 + 0.4 + (allElements.length - 2) * 0.05 + 0.8; // Last hero element delay + duration
			const featureCards = document.querySelectorAll('.feature-card');
			featureCards.forEach((card, i) => {
				animate(
					card,
					{ opacity: 1, y: [20, 0], filter: ['blur(10px)', 'blur(0px)'] },
					{ delay: lastHeroDelay + 0.1 + i * 0.05, duration: 0.8, easing: [0.16, 1, 0.3, 1] }
				);
			});
		}, medianDelay);
	});
</script>

<main>
	<section class="flex min-h-screen w-full items-center">
		<div class="container max-w-7xl">
			<div class="relative mx-auto grid max-w-6xl gap-4">
				<div
					class="hero-logo bg-opacity-50 pointer-events-none absolute top-1/2 left-1/2 z-20 flex h-36 min-h-36 w-36 min-w-36 items-center justify-center rounded-3xl border backdrop-blur-lg"
				>
					<div>
						<Feather size={96} class="text-foreground" />
					</div>
				</div>
				<div
					class="from-background pointer-events-none absolute left-0 z-10 h-full w-16 bg-linear-to-r to-transparent sm:w-32 md:w-64"
				></div>
				<div
					class="from-background pointer-events-none absolute right-0 z-10 h-full w-16 bg-linear-to-l to-transparent sm:w-32 md:w-64"
				></div>

				<div
					class="from-background pointer-events-none absolute bottom-0 z-10 h-16 w-full bg-linear-to-t to-transparent sm:h-32"
				></div>

				<div
					class="from-background pointer-events-none absolute top-0 z-10 h-16 w-full bg-linear-to-b to-transparent sm:h-32"
				></div>

				<Marquee gap="24px" speed={20} class="min-h-14">
					{#each marquee1Icons as Icon, i}
						<div
							class="marquee-icon flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
						>
							<Icon size={24} class="text-muted-foreground" />
						</div>
					{/each}
				</Marquee>

				<Marquee gap="24px" speed={24} class="min-h-14">
					{#each marquee2Icons as Icon, i}
						<div
							class="marquee-icon flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
						>
							<Icon size={24} class="text-muted-foreground" />
						</div>
					{/each}
				</Marquee>

				<Marquee gap="24px" speed={16} class="min-h-14">
					{#each marquee3Icons as Icon, i}
						<div
							class="marquee-icon flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
						>
							<Icon size={24} class="text-muted-foreground" />
						</div>
					{/each}
				</Marquee>

				<Marquee gap="24px" speed={28} class="min-h-14">
					{#each marquee4Icons as Icon, i}
						<div
							class="marquee-icon flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
						>
							<Icon size={24} class="text-muted-foreground" />
						</div>
					{/each}
				</Marquee>
			</div>

			<h1
				class="hero-title mx-auto mt-8 w-fit max-w-5xl text-center text-3xl font-semibold text-balance sm:text-4xl md:text-5xl"
			>
				<span>Beautifully</span> <span>crafted,</span> <span>moving</span> <span>icons.</span>
				<span>For</span>
				<span class="bg-linear-to-br from-[#FF3E00] to-orange-400 bg-clip-text text-transparent"
					>Svelte</span
				><span>.</span>
			</h1>
			<p
				class="hero-description text-muted-foreground mx-auto mt-5 w-fit max-w-2xl text-center text-sm leading-relaxed text-pretty sm:mt-4 sm:text-base"
			>
				A collection of animated icons for your projects. Feel free to use them, share your
				feedback, and let's make this library awesome together!
			</p>
			<div class="hero-button mx-auto mt-6 w-fit">
				<Button variant="outline" href="/icons">Browse icons</Button>
			</div>
		</div>
	</section>

	<section class="container max-w-7xl">
		<div class="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
			<div class="feature-card space-y-3">
				<div class="flex items-center gap-2">
					<Code class="size-4" />
					<h3 class="text-sm font-medium">Open Source</h3>
				</div>
				<p class="text-muted-foreground text-sm">All icons licensed under the MIT license.</p>
			</div>
			<div class="feature-card space-y-2">
				<div class="flex items-center gap-2">
					<Package class="size-4" />
					<h3 class="text-sm font-medium">Dependency Free</h3>
				</div>
				<p class="text-muted-foreground text-sm">Built with vanilla Svelte, JS and CSS.</p>
			</div>
			<div class="feature-card space-y-2">
				<div class="flex items-center gap-2">
					<SlidersHorizontal class="size-4" />
					<h3 class="text-sm font-medium">Customizable</h3>
				</div>
				<p class="text-muted-foreground text-sm">Adjust colours, size, and stroke width.</p>
			</div>
			<div class="feature-card space-y-2">
				<div class="flex items-center gap-2">
					<Feather class="size-4" />
					<h3 class="text-sm font-medium">Lightweight</h3>
				</div>
				<p class="text-muted-foreground text-sm">Simply copy the icons you need.</p>
			</div>
		</div>
	</section>
</main>

<footer class="mt-16">
	<p class="text-muted-foreground mb-4 text-center text-xs">
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

	.hero-button {
		opacity: 0;
		filter: blur(10px);
	}

	.marquee-icon {
		opacity: 0;
	}

	.feature-card {
		opacity: 0;
		filter: blur(10px);
	}
</style>

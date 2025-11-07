<script>
	import { onMount } from 'svelte';
	import Marquee from 'svelte-fast-marquee';
	import { animate } from 'motion';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
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

		const allMarqueeIcons = Array.from(document.querySelectorAll('.marquee-icon'));
		const randomDelays = Array.from(allMarqueeIcons).map(() => Math.random() * 1500);

		allMarqueeIcons.forEach((icon, i) => {
			animate(
				icon,
				{
					opacity: [0, 1],
					y: [3, 0],
					filter: ['blur(6px)', 'blur(0px)']
				},
				{
					delay: randomDelays[i] / 1000,
					duration: 0.4,
					easing: [0.42, 0, 0.58, 1]
				}
			);
		});

		const sortedDelays = [...randomDelays].sort((a, b) => a - b);
		const oneThirdIndex = Math.floor(sortedDelays.length / 3);
		const oneThirdDelay = sortedDelays[oneThirdIndex] || 500;
		const heroStartTime = (oneThirdDelay + 400) / 1000;

		const logo = document.querySelector('.hero-logo');
		const titleSpans = document.querySelectorAll('.hero-title > span');
		const description = document.querySelector('.hero-description');
		const button = document.querySelector('.hero-button');

		const allElements = [logo, ...Array.from(titleSpans), description, button].filter(Boolean);
		const heroLogoDuration = 0.7;

		allElements.forEach((element, i) => {
			if (i === 0) {
				animate(
					element,
					{
						opacity: [0, 1],
						transform: [
							'translate(calc(-50% + 0px), calc(-50% + 15px)) scale(0.9)',
							'translate(-50%, -50%) scale(1)'
						],
						filter: ['blur(6px)', 'blur(0px)']
					},
					{
						delay: heroStartTime,
						duration: heroLogoDuration,
						easing: [0.16, 1, 0.3, 1]
					}
				);
			} else {
				const staggerDelay = heroStartTime + 0.15 + (i - 1) * 0.04;
				animate(
					element,
					{
						opacity: [0, 1],
						y: [15, 0],
						filter: ['blur(6px)', 'blur(0px)']
					},
					{
						delay: staggerDelay,
						duration: 0.7,
						easing: [0.16, 1, 0.3, 1]
					}
				);
			}
		});

		const featureCards = document.querySelectorAll('.feature-card');
		const heroCompleteTime = heroStartTime + 0.15 + (allElements.length - 1) * 0.04 + 0.7;

		featureCards.forEach((card, i) => {
			animate(
				card,
				{
					opacity: [0, 1],
					y: [12, 0],
					filter: ['blur(4px)', 'blur(0px)']
				},
				{
					delay: heroCompleteTime + 0.1 + i * 0.06,
					duration: 0.6,
					easing: [0.16, 1, 0.3, 1]
				}
			);
		});
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

				<Marquee gap="24px" speed={20} class="marquee-row-1 min-h-14">
					{#each marquee1Icons as Icon, i}
						<div
							class="marquee-icon flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
						>
							<Icon size={24} class="text-muted-foreground" />
						</div>
					{/each}
				</Marquee>

				<Marquee gap="24px" speed={24} class="marquee-row-2 min-h-14">
					{#each marquee2Icons as Icon}
						<div
							class="marquee-icon flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
						>
							<Icon size={24} class="text-muted-foreground" />
						</div>
					{/each}
				</Marquee>

				<Marquee gap="24px" speed={16} class="marquee-row-3 min-h-14">
					{#each marquee3Icons as Icon}
						<div
							class="marquee-icon flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900"
						>
							<Icon size={24} class="text-muted-foreground" />
						</div>
					{/each}
				</Marquee>

				<Marquee gap="24px" speed={28} class="marquee-row-4 min-h-14">
					{#each marquee4Icons as Icon}
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
				<span class="hero-title-final whitespace-nowrap"><span class="bg-linear-to-br from-[#FF3E00] to-orange-400 bg-clip-text text-transparent inline-block">Svelte</span><span class="hero-title-dot text-foreground">.</span></span>
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
				<p class="text-muted-foreground text-sm">Simply add the icons you need to your project.</p>
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
		filter: blur(6px);
		transform: translate(calc(-50% + 0px), calc(-50% + 15px)) scale(0.9);
	}

	.hero-title > span {
		display: inline-block;
		opacity: 0;
		filter: blur(6px);
		transform: translateY(15px);
	}

	.hero-description {
		opacity: 0;
		filter: blur(6px);
		transform: translateY(15px);
	}

	.hero-button {
		opacity: 0;
		filter: blur(6px);
		transform: translateY(15px);
	}

	.marquee-icon {
		opacity: 0;
		filter: blur(6px);
		transform: translateY(3px);
	}

	.feature-card {
		opacity: 0;
		filter: blur(4px);
		transform: translateY(12px);
	}
</style>

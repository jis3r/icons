<script>
	import { onMount } from 'svelte';
	import Marquee from 'svelte-fast-marquee';
	import { animate } from 'motion';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { Button } from '$lib-docs/components/ui/button';
	import {
		Activity,
		AlarmClock,
		Anvil,
		Archive,
		ArrowUp01,
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
		Leaf
	} from '@lucide/svelte';

	const allIcons = [
		Activity,
		AlarmClock,
		Anvil,
		Archive,
		ArrowUp01,
		Leaf,
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

	const scriptOpen = '<' + 'script' + '>';
	const scriptClose = '<' + '/' + 'script' + '>';
	const usageExample = [
		scriptOpen,
		"	import { Activity, Star } from '@jis3r/icons';",
		scriptClose,
		'',
		'<Activity size={32} color="orange" strokeWidth={2.5} />',
		'<Star size={32} color="blue" />'
	].join('\n');

	const advancedUsageExample = [
		scriptOpen,
		"	import { Bell } from '@jis3r/icons';",
		'',
		'	let isHovered = $state(false);',
		scriptClose,
		'',
		'<button',
		'	onmouseenter={() => isHovered = true}',
		'	onmouseleave={() => isHovered = false}',
		'	class="flex items-center gap-2"',
		'>',
		'	<Bell size={16} isHovered={isHovered} />',
		'	<span>Notifications</span>',
		'</button>'
	].join('\n');

	const sections = [
		{ id: 'installation', label: 'Installation' },
		{ id: 'usage', label: 'Usage' },
		{ id: 'props', label: 'Props' },
		{ id: 'advanced-usage', label: 'Advanced Usage' }
	];

	let activeSection = $state('installation');

	function scrollToSection(sectionId) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	onMount(() => {
		const observerOptions = {
			rootMargin: '-20% 0px -60% 0px',
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeSection = entry.target.id;
				}
			});
		}, observerOptions);

		sections.forEach((section) => {
			const element = document.getElementById(section.id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			sections.forEach((section) => {
				const element = document.getElementById(section.id);
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	});

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

		const lastElementDelay = heroStartTime + 0.15 + (allElements.length - 2) * 0.04;
		const heroEndTime = lastElementDelay + 0.7;

		const documentation = document.querySelector('#documentation');
		if (documentation) {
			animate(
				documentation,
				{
					opacity: [0, 1],
					y: [20, 0],
					filter: ['blur(6px)', 'blur(0px)']
				},
				{
					delay: heroEndTime,
					duration: 0.4,
					easing: [0.16, 1, 0.3, 1]
				}
			);
		}
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
				<span>The</span> <span>new</span> <span>standard</span> <span>for</span>
				<span>animated</span> <span>icons</span> <span>in</span>
				<span class="hero-title-final whitespace-nowrap"
					><span
						class="inline-block bg-linear-to-br from-[#FF3E00] to-orange-400 bg-clip-text text-transparent"
						>Svelte</span
					><span class="hero-title-dot text-foreground">.</span></span
				>
			</h1>
			<p
				class="hero-description text-muted-foreground mx-auto mt-5 w-fit max-w-2xl text-center text-sm leading-relaxed text-pretty sm:mt-4 sm:text-base"
			>
				Over 500+ hand-crafted, interaction-ready icons. Built natively for Svelte 5 with zero
				dependencies. Fully tree-shakeable, MIT licensed, and completely customizable.
			</p>
			<div class="hero-button mx-auto mt-6 flex w-fit gap-3">
				<Button variant="outline" href="/icons">Browse Icons</Button>
				<!-- <Button variant="outline" onclick={() => scrollToSection('installation')}>Docs</Button> -->
			</div>
		</div>
	</section>

	<section id="documentation" class="documentation-section container max-w-7xl">
		<div class="relative mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[12rem_1fr_12rem] lg:gap-12">
			<aside class="sticky top-24 hidden w-48 self-start lg:block">
				<nav class="space-y-1">
					{#each sections as section}
						<button
							onclick={() => scrollToSection(section.id)}
							class="w-full rounded-md px-3 py-2 text-left text-sm transition-colors {activeSection ===
							section.id
								? 'text-foreground font-medium'
								: 'text-muted-foreground hover:text-foreground'}"
						>
							{section.label}
						</button>
					{/each}
				</nav>
			</aside>

			<div class="mx-auto mt-2 w-full max-w-[592px] space-y-8">
				<div class="space-y-6">
					<div id="installation" class="scroll-mt-24 space-y-3">
						<div class="space-y-8">
							<div class="space-y-4">
								<h4 class="text-sm font-medium">Install via npm</h4>
								<div class="bg-muted/50 w-full max-w-full overflow-x-auto rounded-lg border p-4">
									<code class="text-sm whitespace-nowrap">npm i @jis3r/icons</code>
								</div>
							</div>
							<div class="space-y-4">
								<h4 class="text-sm font-medium">Add via shadcn-svelte registry</h4>
								<p class="text-muted-foreground text-sm">
									You can add icons to your project using the shadcn registry. Ensure shadcn-svelte
									is installed. To add an icon, simply copy the command from the website and run it
									in your terminal. Icons will be added to your project in the <code
										class="bg-muted rounded px-1.5 py-0.5 text-xs"
										>src/lib/components/movingicons</code
									> directory.
								</p>
								<div class="bg-muted/50 w-full max-w-full overflow-x-auto rounded-lg border p-4">
									<code class="text-sm whitespace-nowrap"
										>npx shadcn-svelte@latest add https://movingicons.dev/r/[icon-name]</code
									>
								</div>
							</div>
							<div class="space-y-4">
								<h4 class="text-sm font-medium">Or copy from Website</h4>
								<p class="text-muted-foreground text-sm">
									You can download or copy icon components directly from the
									<a href="/icons" class="text-foreground underline"> icons page </a>

									and paste them into your Svelte project.
								</p>
							</div>
						</div>
					</div>

					<hr class="my-16" />

					<div id="usage" class="scroll-mt-24 space-y-8">
						<h2 class="flex items-center gap-2 text-2xl font-medium">Usage</h2>
						<p class="text-muted-foreground text-sm">Import icons as named Svelte components:</p>
						<div class="bg-muted/50 w-full max-w-full overflow-x-auto rounded-lg border p-4">
							<pre class="text-sm whitespace-pre"><code>{usageExample}</code></pre>
						</div>
						<div class="mt-3 space-y-4">
							<p class="text-muted-foreground text-sm">
								All icons are available as named exports in PascalCase.
							</p>
							<p class="text-muted-foreground text-sm">
								Compatible with SvelteKit and Svelte projects.
							</p>
						</div>
					</div>

					<hr class="my-16" />

					<div id="props" class="scroll-mt-24 space-y-8">
						<h2 class="flex items-center gap-2 text-xl font-medium">Props</h2>
						<div class="w-full max-w-full overflow-hidden overflow-x-auto rounded-lg border">
							<table class="w-full min-w-full text-sm">
								<thead class="bg-muted/50">
									<tr>
										<th class="p-3 text-left font-medium">Prop</th>
										<th class="p-3 text-left font-medium">Type</th>
										<th class="p-3 text-left font-medium">Default</th>
										<th class="p-3 text-left font-medium">Description</th>
									</tr>
								</thead>
								<tbody class="divide-y">
									<tr>
										<td class="p-3 font-mono text-xs">size</td>
										<td class="text-muted-foreground p-3">number</td>
										<td class="text-muted-foreground p-3">24</td>
										<td class="text-muted-foreground p-3">Icon size in pixels</td>
									</tr>
									<tr>
										<td class="p-3 font-mono text-xs">color</td>
										<td class="text-muted-foreground p-3">string</td>
										<td class="text-muted-foreground p-3">'currentColor'</td>
										<td class="text-muted-foreground p-3">Stroke color (CSS color value)</td>
									</tr>
									<tr>
										<td class="p-3 font-mono text-xs">strokeWidth</td>
										<td class="text-muted-foreground p-3">number</td>
										<td class="text-muted-foreground p-3">2</td>
										<td class="text-muted-foreground p-3">SVG stroke width</td>
									</tr>
									<tr>
										<td class="p-3 font-mono text-xs">class</td>
										<td class="text-muted-foreground p-3">string</td>
										<td class="text-muted-foreground p-3">—</td>
										<td class="text-muted-foreground p-3">Optional additional CSS classes</td>
									</tr>
									<tr>
										<td class="p-3 font-mono text-xs">isHovered</td>
										<td class="text-muted-foreground p-3">boolean</td>
										<td class="text-muted-foreground p-3">false</td>
										<td class="text-muted-foreground p-3">Controls icon animation state</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<hr class="my-16" />

					<div id="advanced-usage" class="scroll-mt-24 space-y-8">
						<h2 class="flex items-center gap-2 text-xl font-medium">Advanced Usage</h2>
						<p class="text-muted-foreground text-sm">
							Control icon animations from parent elements by binding the <code
								class="bg-muted rounded px-1.5 py-0.5 text-xs">isHovered</code
							>
							prop to your own hover state:
						</p>
						<div class="bg-muted/50 w-full max-w-full overflow-x-auto rounded-lg border p-4">
							<pre class="text-sm whitespace-pre"><code>{advancedUsageExample}</code></pre>
						</div>
					</div>
				</div>
			</div>

			<aside class="hidden w-48 lg:block" aria-hidden="true"></aside>
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

	.documentation-section {
		opacity: 0;
		filter: blur(6px);
		transform: translateY(20px);
	}
</style>

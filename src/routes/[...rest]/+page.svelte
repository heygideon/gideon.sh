<script lang="ts">
	import type { PageData } from './$types';
	import { setContext } from 'svelte';

	import { goto, afterNavigate } from '$app/navigation';
	import { views } from '$lib/router/views';
	import {
		bringWindowToFront,
		openWindow,
		routerState,
		showDesktop
	} from '$lib/router/index.svelte';

	import Taskbar from '$lib/components/taskbar/Taskbar.svelte';
	import Window from '$lib/components/window/Window.svelte';

	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';

	import neocats from '$lib/assets/neocat';
	import Presence from '$lib/components/desktop/Presence.svelte';
	import { click } from '$lib/click';
	import { clickSound } from '$lib/sfx';

	const { data }: { data: PageData } = $props();
	setContext('pageData', () => data);

	afterNavigate((navigation) => {
		if (!navigation.to?.params) return;

		const view = navigation.to.params.rest!.split('/')[0];
		if (view) {
			if (view in views) {
				const existingWindow = routerState.windows.find((window) => window.view === view);
				if (existingWindow) {
					bringWindowToFront(existingWindow.id, navigation.to.params.rest);
				} else {
					openWindow(view as keyof typeof views, navigation.to.params.rest);
				}
			}
		} else {
			showDesktop(true);
		}
	});

	let catIdx = $state(data.neocatIdx);
	let neocat = $derived(neocats[catIdx]);
</script>

<Presence />

<div class="flex size-full flex-col items-center justify-center">
	<div>
		<div class="flex max-lg:flex-col-reverse">
			<h1 class="text-5xl sm:text-7xl lg:text-8xl">
				<span class="animate-slide-up block font-semibold" style:animation-delay="0.2s"
					>Hey, I’m Gideon,</span
				>
				<span class="animate-slide-up block" style:animation-delay="0.3s">and I make things.</span>
			</h1>
			<button
				onclick={() => {
					catIdx = (catIdx + 1) % neocats.length;
					clickSound.play();
				}}
				class="animate-pop-in block size-fit rotate-6 transition hover:scale-110 hover:rotate-6 active:scale-95 active:opacity-75 max-lg:mb-2 lg:-mt-4 lg:-ml-2 lg:rotate-12"
				style:animation-delay="0.5s"
			>
				<img src={neocat} alt="" class="size-16 drop-shadow-md sm:size-24 lg:size-32" />
			</button>
		</div>
		<div class="mt-6 flex gap-4 max-sm:flex-col">
			{#each Object.entries(views) as [key, { icon, title }], index}
				<button
					{@attach click(() => goto(`/${key}`))}
					class="animate-slide-left-icon flex items-center gap-x-2.5 gap-y-1 rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20 hover:backdrop-blur-xs focus:border-stone-300 focus:bg-white/50 max-sm:-m-2 max-sm:p-2 sm:w-20 sm:flex-col"
					style:animation-delay="0.8s"
					style:--index={index}
				>
					<div class="relative">
						<img src={icon} alt="" class="h-8 drop-shadow-xs sm:h-12" />
						<div
							class="absolute bottom-0 left-0 grid size-3 place-items-center border border-stone-300/50 bg-white"
						>
							<ArrowUpRight weight="bold" class="size-2 text-sky-600" />
						</div>
					</div>
					<span class="sm:text-sm">{title}</span>
				</button>
			{/each}
		</div>
	</div>
</div>

<Taskbar />

<div class="relative isolate z-10">
	{#each routerState.windows as window (window.id)}
		{@const Component = views[window.view].component}
		<Window
			id={window.id}
			width={views[window.view].size.width}
			height={views[window.view].size.height}
		>
			<Component />
		</Window>
	{/each}
</div>

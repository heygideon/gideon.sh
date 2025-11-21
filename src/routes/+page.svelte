<script lang="ts">
	import rocket from '$lib/assets/images/rocket.png';
	import smile from '$lib/assets/images/smile.png';
	import globe from '$lib/assets/images/globe.png';
	import message from '$lib/assets/images/message.png';

	import Taskbar from '$lib/components/taskbar/Taskbar.svelte';
	import Window from '$lib/components/window/Window.svelte';

	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';

	import { windowState, windowMap, openWindow } from '$lib/state/window.svelte';

	import neocats from '$lib/assets/neocat';
	import About from '$lib/views/About.svelte';

	let catIdx = $state(Math.floor(Math.random() * neocats.length));
	let neocat = $derived(neocats[catIdx]);
</script>

<div class="pointer-events-none fixed inset-x-0 top-0 flex items-center justify-center gap-1.5 p-4">
	<div class="flex items-center gap-1">
		<span
			role="img"
			aria-label="Presence"
			class="mt-0.5 inline-block size-2.5 rounded-full bg-radial from-emerald-500 to-emerald-600"
		></span>
		<span class="text-sm font-medium text-emerald-700">online</span>
	</div>
	<span class="text-sm text-stone-600">/</span>
	<span class="text-sm text-stone-600">United Kingdom</span>
</div>

<div class="flex size-full flex-col items-center justify-center">
	<div>
		<div class="flex">
			<h1 class="text-8xl">
				<span class="font-semibold">Hey, I’m Gideon,</span><br />
				and I make things.
			</h1>
			<button
				onclick={() => {
					catIdx = (catIdx + 1) % neocats.length;
				}}
				class="-mt-4 -ml-2 block size-fit rotate-12 transition hover:scale-110 hover:rotate-6 active:scale-95 active:opacity-75"
			>
				<img src={neocat} alt="" class="size-32 drop-shadow-md" />
			</button>
		</div>
		<div class="mt-6 flex gap-4">
			{#each Object.entries(windowMap) as [name, { icon, title }]}
				<button
					ondblclick={() => {
						openWindow(name as keyof typeof windowMap);
					}}
					class="flex w-20 flex-col items-center rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20 focus:border-stone-300 focus:bg-white/50"
				>
					<div class="relative">
						<img src={icon} alt="" class="h-12 drop-shadow-xs" />
						<div
							class="absolute bottom-0 left-0 grid size-3 place-items-center border border-stone-300/50 bg-white"
						>
							<ArrowUpRight weight="bold" class="size-2 text-sky-600" />
						</div>
					</div>
					<span class="mt-1 text-sm">{title}</span>
				</button>
			{/each}
		</div>
	</div>
</div>

<Taskbar />

<div class="relative isolate z-10">
	{#each windowState.windows as window (window.id)}
		{@const Component = windowMap[window.name].component}
		<Window
			id={window.id}
			width={windowMap[window.name].size.width}
			height={windowMap[window.name].size.height}
		>
			<Component />
		</Window>
	{/each}
</div>

<script lang="ts">
	import cat from '$lib/assets/images/a-cat.svg';

	import GlobeX from 'phosphor-svelte/lib/GlobeX';
	import WifiHigh from 'phosphor-svelte/lib/WifiHigh';
	import BatteryHigh from 'phosphor-svelte/lib/BatteryHigh';

	import Time from './Time.svelte';

	import { bringWindowToFront, routerState } from '$lib/router/index.svelte';
	import { views } from '$lib/router/views';
</script>

<div
	class="fixed inset-x-0 bottom-0 z-20 flex h-12 border-t border-stone-300/50 bg-white/20 px-6 backdrop-blur-2xl"
>
	<div class="flex-1"></div>
	<div class="flex items-center gap-0.5">
		<button
			class="group grid size-10 place-items-center rounded-sm border border-transparent transition hover:border-stone-300/50 hover:bg-white/50"
		>
			<img
				src={cat}
				alt="A cute cat"
				class="size-6 drop-shadow-xs transition group-active:scale-90 group-active:opacity-75"
			/>
		</button>
		{#each routerState.windows as window (window.id)}
			{@const active = routerState.order.at(-1) === window.id}
			<button
				onclick={() => bringWindowToFront(window.id)}
				class={[
					'group relative grid size-10 place-items-center rounded-sm border  transition',
					active
						? 'border-stone-300/50 bg-white/50'
						: 'border-transparent hover:border-stone-300/50 hover:bg-white/50'
				]}
			>
				<img
					src={views[window.view].icon}
					alt={views[window.view].title}
					class="size-6 drop-shadow-xs transition group-active:scale-90 group-active:opacity-75"
				/>
				<div
					class={[
						'absolute bottom-0 left-1/2 h-[3px]  -translate-x-1/2 rounded-full transition-all',
						active ? 'w-4 bg-amber-600' : 'w-2 bg-stone-300'
					]}
				></div>
			</button>
		{/each}
	</div>
	<div class="flex flex-1 items-center justify-end gap-4 text-right">
		<span class="text-sm">ENG</span>
		<div class="flex items-center gap-2">
			<WifiHigh class="size-4" />
			<!-- <GlobeX class="size-4" /> -->
			<BatteryHigh weight="fill" class="size-4" />
		</div>
		<Time />
	</div>
</div>

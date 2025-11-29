<script module lang="ts">
	declare global {
		interface BatteryManager {
			/** A Boolean value indicating whether the battery is currently being charged.*/
			readonly charging: boolean;
			/** A number representing the remaining time in seconds until the battery is fully charged, or 0 if the battery is already fully charged. */
			readonly chargingTime: number;
			/** A number representing the remaining time in seconds until the battery is completely discharged and the system suspends. */
			readonly dischargingTime: number;
			/** A number representing the system's battery charge level scaled to a value between 0.0 and 1.0. */
			readonly level: number;

			addEventListener(
				type: 'chargingchange' | 'chargingtimechange' | 'dischargingtimechange' | 'levelchange',
				listener: (this: BatteryManager, ev: Event) => any,
				options?: boolean | AddEventListenerOptions
			): void;
			removeEventListener(
				type: 'chargingchange' | 'chargingtimechange' | 'dischargingtimechange' | 'levelchange',
				listener: (this: BatteryManager, ev: Event) => any,
				options?: boolean | EventListenerOptions
			): void;
		}

		interface Navigator {
			getBattery?: () => Promise<BatteryManager>;
		}
	}
</script>

<script lang="ts">
	import cat from '$lib/assets/images/a-cat.svg';

	import GlobeX from 'phosphor-svelte/lib/GlobeX';
	import WifiHigh from 'phosphor-svelte/lib/WifiHigh';

	import BatteryLow from 'phosphor-svelte/lib/BatteryLow';
	import BatteryMedium from 'phosphor-svelte/lib/BatteryMedium';
	import BatteryHigh from 'phosphor-svelte/lib/BatteryHigh';
	import BatteryFull from 'phosphor-svelte/lib/BatteryFull';

	import Time from './Time.svelte';

	import {
		bringWindowToFront,
		minimiseWindow,
		routerState,
		showDesktop
	} from '$lib/router/index.svelte';
	import { views } from '$lib/router/views';
	import { onMount } from 'svelte';

	let batteryLevel = $state(100);
	let batteryManager: BatteryManager | null = null;
	onMount(() => {
		if (!navigator.getBattery) return;

		const updateBatteryLevel = () => {
			if (!batteryManager) return;
			batteryLevel = Math.round(batteryManager.level * 100);
		};

		navigator.getBattery().then((battery) => {
			batteryManager = battery;

			updateBatteryLevel();
			batteryManager.addEventListener('levelchange', updateBatteryLevel);
		});

		return () => {
			if (batteryManager) {
				batteryManager.removeEventListener('levelchange', updateBatteryLevel);
				batteryManager = null;
			}
		};
	});

	const BatteryIcon = $derived.by(() => {
		if (batteryLevel >= 75) return BatteryFull;
		if (batteryLevel >= 50) return BatteryHigh;
		if (batteryLevel >= 25) return BatteryMedium;
		return BatteryLow;
	});
</script>

<div
	class="fixed inset-x-0 bottom-0 z-20 flex h-12 border-t border-stone-300/50 bg-linear-to-r from-orange-50/80 to-amber-50/80 px-6 backdrop-blur-2xl"
>
	<div class="min-w-0 flex-1 max-lg:hidden"></div>
	<div class="flex items-center gap-0.5">
		<button
			onclick={() => showDesktop()}
			class="group grid size-10 place-items-center rounded-sm border border-transparent transition hover:border-stone-300/50 hover:bg-white/50 max-lg:-ml-2"
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
				onclick={() => {
					if (active) {
						minimiseWindow(window.id);
					} else {
						bringWindowToFront(window.id);
					}
				}}
				class={[
					'group relative grid size-10 place-items-center rounded-sm border transition',
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
	<div class="flex min-w-0 flex-1 items-center justify-end gap-4 text-right">
		<span class="text-sm max-sm:hidden">ENG</span>
		<div
			title={`${batteryLevel}% battery`}
			class="-mx-2 flex h-10 items-center gap-2 rounded-sm border border-transparent px-2 transition hover:border-stone-300/50 hover:bg-white/50 max-sm:hidden"
		>
			<WifiHigh class="size-4" />
			<!-- <GlobeX class="size-4" /> -->
			<BatteryIcon weight="fill" class="size-4" />
		</div>
		<Time />
	</div>
</div>

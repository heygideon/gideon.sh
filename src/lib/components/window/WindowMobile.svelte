<script lang="ts">
	import {
		bringWindowToFront,
		deleteWindow,
		minimiseWindow,
		routerState
	} from '$lib/router/index.svelte';
	import { views } from '$lib/router/views';
	import type { WindowProps } from './Window.svelte';

	import Minus from 'phosphor-svelte/lib/Minus';
	import X from 'phosphor-svelte/lib/X';
	import { circIn, circOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	const { id, width, height, children }: WindowProps = $props();

	const openWindow = $derived(routerState.windows.find((w) => w.id === id)!);
	const zIndex = $derived(routerState.order.findIndex((wId) => wId === id));
</script>

{#if !openWindow.minimised}
	<div
		role="presentation"
		onclick={() => deleteWindow(id)}
		style:z-index={zIndex === -1 ? 99 : zIndex}
		in:fade|global={{ duration: 150 }}
		out:fade|global={{ duration: 100 }}
		class="fixed inset-0 bg-black/50 transition-opacity"
	></div>
	<div
		style:z-index={zIndex === -1 ? 99 : zIndex}
		class="pointer-events-none fixed inset-0 flex flex-col justify-end pt-12"
	>
		<div
			id={`window-${id}`}
			role="presentation"
			in:fly|global={{ duration: 150, easing: circOut, y: 48 }}
			out:fly|global={{ duration: 100, easing: circIn, y: 48 }}
			class="pointer-events-auto flex size-full min-h-0 flex-1 flex-col overflow-clip rounded-t-lg border-t border-stone-300 bg-white shadow-lg transition"
		>
			<div
				class="flex h-8 flex-none border-b border-stone-200 bg-linear-to-r from-orange-50 to-amber-50"
			>
				<div data-drag-handle class="flex min-w-0 flex-1 items-center gap-1 px-2.5">
					<img src={views[openWindow.view].icon} alt="" class="h-4" />
					<span class="-mt-0.5 text-sm">{views[openWindow.view].title}</span>
				</div>
				<button
					onclick={() => minimiseWindow(id)}
					class="grid h-full w-12 place-items-center text-stone-600 transition hover:bg-stone-200"
				>
					<Minus class="size-4" />
					<span class="sr-only">Minimise</span>
				</button>
				<button
					onclick={() => deleteWindow(id)}
					class="grid h-full w-12 place-items-center text-stone-600 transition hover:bg-red-600 hover:text-white"
				>
					<X class="size-4" />
					<span class="sr-only">Close</span>
				</button>
			</div>
			<div class="min-w-0 flex-1 overflow-y-auto">
				{@render children?.()}
			</div>
		</div>
		<div class="h-12 flex-none bg-stone-50"></div>
	</div>
{/if}

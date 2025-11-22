<script lang="ts">
	import {
		bringWindowToFront,
		deleteWindow,
		windowMap,
		windowState
	} from '$lib/state/window.svelte';
	import { ControlFrom, controls, draggable } from '@neodrag/svelte';

	import Minus from 'phosphor-svelte/lib/Minus';
	import X from 'phosphor-svelte/lib/X';
	import { type Snippet } from 'svelte';
	import { circIn, circOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	interface Props {
		id: string;
		width: number;
		height: number;
		children?: Snippet;
	}
	const { id, width, height, children }: Props = $props();

	const openWindow = $derived(windowState.windows.find((w) => w.id === id)!);
	const zIndex = $derived(windowState.order.findIndex((wId) => wId === id));
</script>

<div
	style:z-index={zIndex}
	class="pointer-events-none fixed inset-0 flex items-center justify-center"
>
	<div
		{@attach draggable([controls({ allow: ControlFrom.selector('[data-drag-handle]') })])}
		role="presentation"
		style:width={`${width}px`}
		style:height={`${height}px`}
		onmousedown={() => {
			bringWindowToFront(id);
		}}
		in:scale={{ duration: 150, easing: circOut, start: 0.9 }}
		out:scale={{ duration: 100, easing: circIn, start: 0.9 }}
		class="pointer-events-auto flex flex-col overflow-clip rounded-lg border border-stone-300 bg-white shadow-lg transition-shadow nd-dragging:shadow-2xl"
	>
		<div
			class="flex h-8 flex-none border-b border-stone-200 bg-linear-to-r from-orange-50 to-amber-50"
		>
			<div data-drag-handle class="flex min-w-0 flex-1 items-center gap-1 px-2.5">
				<img src={windowMap[openWindow.name].icon} alt="" class="h-4" />
				<span class="-mt-0.5 text-sm">{windowMap[openWindow.name].title}</span>
			</div>
			<button
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
</div>

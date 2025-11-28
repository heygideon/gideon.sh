<script lang="ts">
	import {
		bringWindowToFront,
		deleteWindow,
		minimiseWindow,
		routerState,
		setWindowPosition
	} from '$lib/router/index.svelte';
	import { views } from '$lib/router/views';
	import type { WindowProps } from './Window.svelte';
	import { ControlFrom, controls, draggable, events, position } from '@neodrag/svelte';

	import Minus from 'phosphor-svelte/lib/Minus';
	import X from 'phosphor-svelte/lib/X';
	import { circIn, circOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	const { id, width, height, children }: WindowProps = $props();

	const openWindow = $derived(routerState.windows.find((w) => w.id === id)!);
	const zIndex = $derived(routerState.order.findIndex((wId) => wId === id));
</script>

<div
	style:z-index={zIndex === -1 ? 99 : zIndex}
	class="pointer-events-none fixed inset-0 flex items-center justify-center"
>
	<div
		{@attach draggable([
			controls({ allow: ControlFrom.selector('[data-drag-handle]') }),
			position({ current: openWindow.pos }),
			events({
				onDragEnd: (data) => {
					setWindowPosition(id, data.offset);
				}
			})
		])}
		id={`window-${id}`}
		role="presentation"
		style:width={`${width}px`}
		style:height={`${height}px`}
		onmousedown={(ev) => {
			// ignore back/forward buttons
			if (ev.button >= 3) return;
			bringWindowToFront(id);
		}}
		in:scale|global={{ duration: 150, easing: circOut, start: 0.9 }}
		out:scale|global={{ duration: 100, easing: circIn, start: 0.9 }}
		class={[
			'flex flex-col overflow-clip rounded-lg border border-stone-300 bg-white shadow-lg transition-[box-shadow,opacity] nd-dragging:shadow-2xl',
			openWindow.minimised ? 'opacity-0' : 'pointer-events-auto'
		]}
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
</div>

<script lang="ts">
	import rocket from '$lib/assets/images/rocket.png';
	import smile from '$lib/assets/images/smile.png';
	import { ControlFrom, controls, draggable } from '@neodrag/svelte';

	import Minus from 'phosphor-svelte/lib/Minus';
	import X from 'phosphor-svelte/lib/X';
	import type { Snippet } from 'svelte';

	interface Props {
		width: number;
		height: number;
		children?: Snippet;
	}
	const { width, height, children }: Props = $props();
</script>

<div class="pointer-events-none fixed inset-0 flex items-center justify-center">
	<div
		style:width={`${width}px`}
		style:height={`${height}px`}
		{@attach draggable([controls({ allow: ControlFrom.selector('[data-drag-handle]') })])}
		class="pointer-events-auto flex flex-col overflow-clip rounded-lg border border-stone-300 bg-white shadow-lg transition-shadow nd-dragging:shadow-2xl"
	>
		<div
			class="flex h-8 flex-none border-b border-stone-200 bg-linear-to-r from-orange-50 to-amber-50"
		>
			<div data-drag-handle class="flex min-w-0 flex-1 items-center gap-1 px-2.5">
				<img src={rocket} alt="" class="h-4" />
				<span class="-mt-0.5 text-sm">Projects</span>
			</div>
			<button
				class="grid h-full w-12 place-items-center text-stone-600 transition hover:bg-stone-200"
			>
				<Minus class="size-4" />
				<span class="sr-only">Minimise</span>
			</button>
			<button
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

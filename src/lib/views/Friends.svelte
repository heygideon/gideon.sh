<script lang="ts">
	import FolderOpen from 'phosphor-svelte/lib/FolderOpen';
	import { getContext } from 'svelte';
	import type { PageData } from '../../routes/[...rest]/$types';
	import { click } from '$lib/click';

	const pageData = getContext<() => PageData>('pageData');

	let webrings = $derived(pageData().webrings);
	const total = $derived(Object.values(webrings).reduce((acc, items) => acc + items.length, 0));
</script>

<div class="p-6 pb-3">
	<p class="text-2xl leading-tight font-semibold">Online friends</p>
	<div class="mt-1 flex items-center gap-1.5 text-stone-600">
		<FolderOpen class="size-4" />
		<span class="">Folder &middot; {total} items</span>
	</div>
</div>

<div class="space-y-6 p-3">
	<section>
		<p class="mb-2 px-3 text-sm leading-none font-semibold text-stone-600">placeholder</p>
		<div class="flex flex-wrap gap-2">
			{#each webrings.placeholder as item}
				<button
					{@attach click(() => {
						open(item.website, '_blank');
					})}
					class="flex w-28 flex-none flex-col items-center rounded-sm border border-transparent py-2 text-center hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
				>
					<img src={item.img} height="31" width="88" alt="" class="shadow-xs" />
					<div class="mt-1.5 w-full px-3">
						<p class="truncate">{item.name}</p>
						<p class="truncate text-xs text-stone-600">{item.website}</p>
					</div>
				</button>
			{/each}
		</div>
	</section>
</div>

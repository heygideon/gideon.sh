<script lang="ts">
	import FolderOpen from 'phosphor-svelte/lib/FolderOpen';
	import { getContext } from 'svelte';
	import type { PageData } from '../../routes/$types';

	const { webrings } = getContext<PageData>('pageData');

	const total = Object.values(webrings).reduce((acc, items) => acc + items.length, 0);
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
		<div class="space-y-0.5">
			{#each webrings.placeholder as item}
				<button
					ondblclick={() => {
						open(item.website, '_blank');
					}}
					class="flex h-10 w-full items-center gap-3 rounded-sm border border-transparent px-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
				>
					<img src={item.img} height="31" width="88" alt="" class="shadow-xs" />
					<span class="min-w-0 flex-1">{item.name}</span>
					<span class="min-w-0 flex-1 text-stone-600">{item.website}</span>
				</button>
			{/each}
		</div>
	</section>
</div>

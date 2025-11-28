<script lang="ts">
	import FolderOpen from 'phosphor-svelte/lib/FolderOpen';
	import Copy from 'phosphor-svelte/lib/Copy';
	import Check from 'phosphor-svelte/lib/Check';
	import { getContext } from 'svelte';
	import type { PageData } from '../../routes/[...rest]/$types';
	import { click } from '$lib/click';

	const pageData = getContext<() => PageData>('pageData');

	let webrings = $derived(pageData().webrings);
	const total = $derived(Object.values(webrings).reduce((acc, items) => acc + items.length, 0));

	const buttonLink = `${window.location.origin}/88x31.gif`;
	let copied = $state(false);
	let copiedTimeout: ReturnType<typeof setTimeout>;
	function copyButtonLink() {
		if (copiedTimeout) clearTimeout(copiedTimeout);
		navigator.clipboard.writeText(buttonLink).then(() => {
			copied = true;
			copiedTimeout = setTimeout(() => {
				copied = false;
			}, 2000);
		});
	}
</script>

<div class="p-6 pb-4">
	<p class="text-2xl leading-tight font-semibold">Online friends</p>
	<div class="mt-1 flex items-center gap-1.5 text-stone-600">
		<FolderOpen class="size-4" />
		<span class="">Folder &middot; {total} items</span>
	</div>
</div>

<div class="flex gap-4 border-y border-stone-300 bg-stone-50 p-4 px-6">
	<div class="min-w-0 flex-1">
		<p class="leading-tight"><span class="font-semibold">Add my button!</span> copy link below</p>
		<div
			class="mt-1.5 flex h-8 max-w-fit overflow-clip rounded-sm border border-stone-300 bg-white text-stone-600 shadow-xs"
		>
			<div class="flex min-w-0 items-center px-3">
				<span class="truncate">{buttonLink}</span>
			</div>
			<button
				onclick={copyButtonLink}
				class="grid w-8 flex-none place-items-center border-l border-stone-300 hover:bg-stone-100"
			>
				{#if copied}
					<Check weight="bold" class="size-3 text-green-700" />
					<span class="sr-only">Copied!</span>
				{:else}
					<Copy weight="bold" class="size-4" />
					<span class="sr-only">Copy link to 88x31 button</span>
				{/if}
			</button>
		</div>
	</div>
	<img src="/88x31.gif" alt="88x31 button" width={88} height={31} class="size-fit flex-none" />
</div>

<div class="space-y-6 p-3 pt-4">
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

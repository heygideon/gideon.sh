<script lang="ts">
	import FolderOpen from 'phosphor-svelte/lib/FolderOpen';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';

	import hackClub from '$lib/assets/images/hack-club.svg';
	import SiGithub from '$lib/components/icons/SiGithub.svelte';
</script>

<div class="p-6 pb-3">
	<p class="text-2xl leading-tight font-semibold">Find me around, or just say hello:</p>
	<div class="mt-1 flex items-center gap-1.5 text-stone-600">
		<FolderOpen class="size-4" />
		<span class="">Folder &middot; 3 items</span>
	</div>
</div>
<div class="space-y-0.5 p-3">
	<button
		class="flex h-8 w-full items-center gap-2 rounded-sm border border-transparent px-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
	>
		<img src={hackClub} alt="" class="size-4" />
		<span class="min-w-0 flex-1">hack_club</span>
		<span class="min-w-0 flex-1 text-stone-600">gideon</span>
	</button>
	<button
		class="flex h-8 w-full items-center gap-2 rounded-sm border border-transparent px-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
	>
		<SiGithub class="size-4" />
		<span class="min-w-0 flex-1">github</span>
		<span class="min-w-0 flex-1 text-stone-600">heygideon</span>
	</button>
	<button
		class="flex h-8 w-full items-center gap-2 rounded-sm border border-transparent px-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
	>
		<EnvelopeSimple class="size-4" />
		<span class="min-w-0 flex-1">email</span>
		<span class="min-w-0 flex-1 text-stone-600">hey@gideon.sh</span>
	</button>
</div>

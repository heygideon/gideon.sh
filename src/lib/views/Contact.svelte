<script lang="ts">
	import FolderOpen from 'phosphor-svelte/lib/FolderOpen';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';
	import Check from 'phosphor-svelte/lib/Check';

	import hackClub from '$lib/assets/images/hack-club.svg';
	import SiGithub from '$lib/components/icons/SiGithub.svelte';
	import { click } from '$lib/click';
	import { clickSound } from '$lib/sfx';

	const email = 'hs.noedig@yeh'.split('').reverse().join('');
	const pairs = email.match(/.{1,2}/g)!;

	let copied = $state(false);
	let copiedTimeout: ReturnType<typeof setTimeout>;
	function copyEmail() {
		if (copiedTimeout) clearTimeout(copiedTimeout);
		navigator.clipboard.writeText(email).then(() => {
			copied = true;
			copiedTimeout = setTimeout(() => {
				copied = false;
			}, 2000);
		});
	}
</script>

<div class="p-6 pb-3">
	<p class="text-2xl leading-tight font-semibold">Find me around, or just say hello!</p>
	<div class="mt-1 flex items-center gap-1.5 text-stone-600">
		<FolderOpen class="size-4" />
		<span class="">Folder &middot; 3 items</span>
	</div>
</div>
<div class="space-y-0.5 p-3">
	<button
		{@attach click(() => {
			clickSound.play();
			window.open('https://hackclub.enterprise.slack.com/team/U09D42Q0ARJ', '_blank');
		})}
		class="flex h-8 w-full items-center gap-2 rounded-sm border border-transparent px-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
	>
		<img src={hackClub} alt="" class="size-4" />
		<span class="min-w-0 flex-1">hack_club</span>
		<span class="min-w-0 flex-1 text-stone-600">gideon</span>
	</button>
	<button
		{@attach click(() => {
			clickSound.play();
			window.open('https://github.com/heygideon', '_blank');
		})}
		class="flex h-8 w-full items-center gap-2 rounded-sm border border-transparent px-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
	>
		<SiGithub class="size-4" />
		<span class="min-w-0 flex-1">github</span>
		<span class="min-w-0 flex-1 text-stone-600">heygideon</span>
	</button>
	<button
		{@attach click(() => {
			copyEmail();
			clickSound.play();
		})}
		class="flex h-8 w-full items-center gap-2 rounded-sm border border-transparent px-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
	>
		<EnvelopeSimple class="size-4" />
		<span class="min-w-0 flex-1">email</span>
		<span class="min-w-0 flex-1 text-stone-600">
			{#if copied}
				<div class="flex items-center gap-1 text-green-700">
					<Check weight="bold" class="size-3" />
					<span class="text-sm font-semibold">Copied!</span>
				</div>
			{:else}
				{#each pairs as pair}
					<span class="after:content-[attr(data-after)]" data-after={pair[1]}>
						{pair[0]}
					</span>
				{/each}
			{/if}
		</span>
	</button>
</div>

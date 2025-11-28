<script lang="ts">
	import aww from '$lib/assets/neocat/aww.png';
	import { onMount } from 'svelte';

	let content: HTMLDivElement;
	let wordCount = $state(0);

	onMount(() => {
		const text = content.innerText;
		const words = text.trim().split(/\s+/);
		wordCount = words.length;
	});
</script>

<div bind:this={content} class="space-y-6 p-6">
	<section class="text-2xl">
		<img src={aww} alt="" class="h-12" />
		<p class="mt-2">
			<span class="font-semibold">Heya, I’m Gideon!</span> I enjoy exploring and making beautiful, functional
			websites and apps - especially ones that make people's lives a little more joyful.
		</p>
		<p class="mt-2">
			I work all across the board, across frontend and backend. I’ve used tools like React, Svelte,
			Tailwind, Next.js, Astro and more.
		</p>
	</section>
	<section class="overflow-clip rounded-sm border border-amber-200 bg-amber-50">
		<p class="w-fit rounded-br-sm bg-amber-200 px-1.5 text-sm font-semibold">Hobbies</p>
		<div class="p-3 px-4 text-xl leading-snug">
			<p>Outside of coding:</p>
			<ul class="mt-1.5 list-disc space-y-1 pl-6">
				<li>swimming, and teaching swimming</li>
				<li>studying</li>
				<li>reading for pleasure (murder mystery)</li>
				<li>playing piano and drumkit acceptably</li>
				<li>sometimes, having fun</li>
			</ul>
		</div>
	</section>
	<section class="overflow-clip rounded-sm border border-sky-200 bg-sky-50">
		<p class="w-fit rounded-br-sm bg-sky-200 px-1.5 text-sm font-semibold">Right now</p>
		<div class="p-3 px-4 text-xl leading-snug">
			<p>
				I’m working on infrastructure at <a
					href="https://youthacks.org"
					target="_blank"
					class="underline decoration-1 underline-offset-2 transition hover:text-red-700"
				>
					Youthacks
				</a>.
			</p>
		</div>
	</section>
</div>

<div
	class="sticky -bottom-px flex h-7 items-center justify-end border-t border-stone-200 bg-stone-50 px-6 text-xs text-stone-600"
>
	<span class="w-20 flex-auto">
		{wordCount} words
	</span>
	<div class="w-44 flex-auto border-l border-stone-200 pl-2 leading-snug">Plain text</div>
	<div class="w-14 flex-auto border-l border-stone-200 pl-2 leading-snug">100%</div>
	<div class="w-32 flex-auto border-l border-stone-200 pl-2 leading-snug max-sm:hidden">
		Windows (CRLF)
	</div>
	<div class="w-32 flex-auto border-l border-stone-200 pl-2 leading-snug max-sm:hidden">UTF-8</div>
</div>

<script lang="ts">
	import rocket from '$lib/assets/images/rocket.png';
	import smile from '$lib/assets/images/smile.png';
	import globe from '$lib/assets/images/globe.png';
	import message from '$lib/assets/images/message.png';

	import Taskbar from '$lib/components/taskbar/Taskbar.svelte';
	import Window from '$lib/components/window/Window.svelte';

	import neocats from '$lib/assets/neocat';
	import aww from '$lib/assets/neocat/aww.png';

	let catIdx = $state(Math.floor(Math.random() * neocats.length));
	let neocat = $derived(neocats[catIdx]);
</script>

<div class="pointer-events-none fixed inset-x-0 top-0 flex items-center justify-center gap-1.5 p-4">
	<div class="flex items-center gap-1">
		<span
			role="img"
			aria-label="Presence"
			class="mt-0.5 inline-block size-2.5 rounded-full bg-radial from-emerald-500 to-emerald-600"
		></span>
		<span class="text-sm font-medium text-emerald-700">online</span>
	</div>
	<span class="text-sm text-stone-600">/</span>
	<span class="text-sm text-stone-600">United Kingdom</span>
</div>

<div class="flex size-full flex-col items-center justify-center">
	<div>
		<div class="flex">
			<h1 class="text-8xl">
				<span class="font-semibold">Hey, I’m Gideon,</span><br />
				and I make things.
			</h1>
			<button
				onclick={() => {
					catIdx = (catIdx + 1) % neocats.length;
				}}
				class="-mt-4 -ml-2 block size-fit rotate-12 transition hover:scale-110 hover:rotate-6 active:scale-95 active:opacity-75"
			>
				<img src={neocat} alt="" class="size-32 drop-shadow-md" />
			</button>
		</div>
		<div class="mt-6 flex gap-4">
			<button
				class="flex w-20 flex-col items-center rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20 focus:border-stone-300 focus:bg-white/50"
			>
				<img src={rocket} alt="" class="h-12" />
				<span class="mt-1 text-sm">Projects</span>
			</button>
			<button
				class="flex w-20 flex-col items-center rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20 focus:border-stone-300 focus:bg-white/50"
			>
				<img src={smile} alt="" class="h-12" />
				<span class="mt-1 text-sm">About me</span>
			</button>
			<button
				class="flex w-20 flex-col items-center rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20 focus:border-stone-300 focus:bg-white/50"
			>
				<img src={globe} alt="" class="h-12" />
				<span class="mt-1 text-sm">Friends</span>
			</button>
			<button
				class="flex w-20 flex-col items-center rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20 focus:border-stone-300 focus:bg-white/50"
			>
				<img src={message} alt="" class="h-12" />
				<span class="mt-1 text-sm">Say hi!</span>
			</button>
		</div>
	</div>
</div>

<Taskbar />

<Window width={640} height={480}>
	<div class="space-y-6 p-6">
		<section class="text-xl leading-snug">
			<img src={aww} alt="" class="h-12" />
			<p class="mt-2">
				<span class="font-semibold">Heya, I’m Gideon!</span> I enjoy tinkering and making beautiful,
				functional websites and apps.
			</p>
			<p class="mt-2">
				I work all across the board, across frontend and backend. I’ve used tools like React,
				Svelte, Tailwind, Next.js, Astro and more.
			</p>
		</section>
		<section class="text-xl leading-snug">
			<p class="mb-0.5 text-base text-stone-600 italic">Hobbies</p>
			<p>Outside of coding:</p>
			<ul class="mt-1.5 list-disc space-y-1 pl-6">
				<li>swimming, and teaching swimming</li>
				<li>studying</li>
				<li>reading for pleasure (murder mystery)</li>
				<li>playing piano and drumkit acceptably</li>
				<li>sometimes, having fun</li>
			</ul>
		</section>
		<section class="text-xl leading-snug">
			<p class="mb-0.5 text-base text-stone-600 italic">Right now</p>
			<p>
				I’m working on infrastructure at <a
					href="https://youthacks.org"
					target="_blank"
					class="underline decoration-1 underline-offset-2 transition hover:text-red-700"
				>
					Youthacks
				</a>.
			</p>
		</section>
	</div>
</Window>

<Window width={640} height={480}>
	<div class="space-y-6 p-6">
		<section class="text-xl leading-snug">
			<img src={aww} alt="" class="h-12" />
			<p class="mt-2">
				<span class="font-semibold">Heya, I’m Gideon!</span> I enjoy tinkering and making beautiful,
				functional websites and apps.
			</p>
			<p class="mt-2">
				I work all across the board, across frontend and backend. I’ve used tools like React,
				Svelte, Tailwind, Next.js, Astro and more.
			</p>
		</section>
		<section class="text-xl leading-snug">
			<p class="mb-1 text-sm text-stone-600">Hobbies</p>
			<p>Outside of coding:</p>
			<ul class="mt-1.5 list-disc space-y-1 pl-6">
				<li>swimming, and teaching swimming</li>
				<li>studying</li>
				<li>reading for pleasure (murder mystery)</li>
				<li>playing piano and drumkit acceptably</li>
				<li>sometimes, having fun</li>
			</ul>
		</section>
		<section class="text-xl leading-snug">
			<p class="mb-1 text-sm text-stone-600">Right now</p>
			<p>
				I’m working on infrastructure at <a
					href="https://youthacks.org"
					target="_blank"
					class="underline decoration-1 underline-offset-2 transition hover:text-red-700"
				>
					Youthacks
				</a>.
			</p>
		</section>
	</div>
</Window>

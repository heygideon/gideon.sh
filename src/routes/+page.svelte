<script lang="ts">
	import neocat from '$lib/assets/neocat/heart.png';
	import cat from '$lib/assets/images/a-cat.svg';
	import rocket from '$lib/assets/images/rocket.png';
	import smile from '$lib/assets/images/smile.png';
	import globe from '$lib/assets/images/globe.png';
	import message from '$lib/assets/images/message.png';

	import GlobeX from 'phosphor-svelte/lib/GlobeX';
	import WifiHigh from 'phosphor-svelte/lib/WifiHigh';
	import BatteryHigh from 'phosphor-svelte/lib/BatteryHigh';
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
			<h1 class="text-8xl tracking-tight">
				<span class="font-semibold">Hey, I’m Gideon,</span><br />
				and I make things.
			</h1>
			<img src={neocat} alt="" class="-mt-4 -ml-2 size-32 rotate-12 drop-shadow-md" />
		</div>
		<div class="mt-6 flex gap-4">
			<button
				class="flex w-20 flex-col items-center rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20"
			>
				<img src={rocket} alt="" />
				<span class="mt-1 text-sm">Projects</span>
			</button>
			<button
				class="flex w-20 flex-col items-center rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20"
			>
				<img src={smile} alt="" />
				<span class="mt-1 text-sm">About me</span>
			</button>
			<button
				class="flex w-20 flex-col items-center rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20"
			>
				<img src={globe} alt="" />
				<span class="mt-1 text-sm">Friends</span>
			</button>
			<button
				class="flex w-20 flex-col items-center rounded-sm border border-transparent pb-0.5 text-center hover:border-stone-300/50 hover:bg-white/20"
			>
				<img src={message} alt="" />
				<span class="mt-1 text-sm">Say hi!</span>
			</button>
		</div>
	</div>
</div>

<div
	class="fixed inset-x-0 bottom-0 flex h-12 border-t border-stone-300/50 bg-white/20 px-6 backdrop-blur-2xl"
>
	<div class="flex-1"></div>
	<div class="flex items-center">
		<button
			class="group grid size-10 place-items-center rounded-sm border border-transparent transition hover:border-stone-300/50 hover:bg-white/50"
		>
			<img
				src={cat}
				alt="A cute cat"
				class="size-6 transition group-active:scale-90 group-active:opacity-75"
			/>
		</button>
	</div>
	<div class="flex flex-1 items-center justify-end gap-4 text-right">
		<span class="text-sm">ENG</span>
		<div class="flex items-center gap-2">
			<WifiHigh class="size-4" />
			<GlobeX class="size-4" />
			<BatteryHigh weight="fill" class="size-4" />
		</div>
		<div>
			<p class="text-sm leading-none">10:23:21</p>
			<p class="mt-0.5 text-sm leading-none">15/11/2025</p>
		</div>
	</div>
</div>

<script lang="ts">
	import neocat from '$lib/assets/neocat/heart.png';
	import rocket from '$lib/assets/images/rocket.png';
	import smile from '$lib/assets/images/smile.png';
	import globe from '$lib/assets/images/globe.png';
	import message from '$lib/assets/images/message.png';

	import Taskbar from '$lib/components/taskbar/Taskbar.svelte';
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

<Taskbar />

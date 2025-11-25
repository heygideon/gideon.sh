<script lang="ts">
	import { kits } from '$lib/drum/kits';
	import { entriesOf } from '$lib/object';
	import Play from 'phosphor-svelte/lib/Play';
	import Pause from 'phosphor-svelte/lib/Pause';
	import CaretUp from 'phosphor-svelte/lib/CaretUp';
	import CaretDown from 'phosphor-svelte/lib/CaretDown';
	import useDrumMachine from '$lib/drum/index.svelte';

	const clamp = (min: number, value: number, max: number) => Math.min(Math.max(value, min), max);

	const { state: drumState, start, stop } = useDrumMachine();

	const hasSolo = $derived(Object.values(drumState.lines).some((s) => s.solo));

	$effect(() => {
		console.log(drumState.kit);
	});

	let tempTempo = $state<string | null>(null);
	const finaliseTempo = () => {
		if (!tempTempo) return;

		const val = parseInt(tempTempo);
		if (isNaN(val)) {
			drumState.tempo = 120;
		} else {
			drumState.tempo = Math.min(Math.max(val, 60), 240);
		}

		tempTempo = null;
	};
</script>

<div class="flex size-full flex-col bg-stone-900 bg-drum-back font-pxl text-white shadow-inner">
	<div class="p-6">
		<p class="flex justify-between text-3xl text-stone-700">
			<span class="text-amber-300">drum machine 3000</span>
			<span>&gt;&gt;</span>
			<span>drum hit make sound!</span>
		</p>
		<div class="mt-4 flex gap-3">
			<button
				onclick={() => {
					if (drumState.playing) {
						stop();
					} else {
						start();
					}
				}}
				class="grid size-10 place-items-center rounded-full border border-stone-600 bg-stone-800 text-sm transition hover:scale-105 hover:border-stone-500 hover:bg-stone-700"
				title="Play"
			>
				{#if drumState.playing}
					<Pause weight="fill" class="size-4 text-amber-300" />
				{:else}
					<Play weight="fill" class="size-4 text-stone-300" />
				{/if}
			</button>
			<div
				class="flex h-10 overflow-clip rounded-sm border border-stone-700 bg-stone-900 ring-amber-600 transition has-focus-within:border-amber-600 has-focus-within:ring-1"
			>
				<div class="relative">
					<input
						type="text"
						value={tempTempo ?? drumState.tempo}
						onkeydown={(e) => {
							if (e.key === 'Enter') {
								finaliseTempo();
								(e.target as HTMLInputElement).blur();
								return;
							}
							if (!/^[0-9]$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
								e.preventDefault();
							}
						}}
						oninput={(e) => {
							tempTempo = (e.target as HTMLInputElement).value;
						}}
						onblur={finaliseTempo}
						class="h-full w-24 px-3 text-2xl outline-none"
					/>
					<span class="pointer-events-none absolute right-1.5 bottom-1.5 text-xs text-stone-600">
						bpm
					</span>
				</div>
				<div class="flex flex-col border-l border-stone-700">
					<button
						onclick={() => {
							drumState.tempo = Math.min(drumState.tempo + 1, 240);
						}}
						class="grid min-h-0 w-6 flex-1 place-items-center hover:bg-stone-800"
					>
						<CaretUp weight="bold" class="size-3 text-stone-300" />
					</button>
					<hr class="border-inherit" />
					<button
						onclick={() => {
							drumState.tempo = Math.max(drumState.tempo - 1, 60);
						}}
						class="grid min-h-0 w-6 flex-1 place-items-center hover:bg-stone-800"
					>
						<CaretDown weight="bold" class="size-3 text-stone-300" />
					</button>
				</div>
			</div>
			<select
				bind:value={drumState.kit}
				class="h-10 rounded-sm border border-stone-700 bg-stone-900 px-3 text-sm hover:bg-stone-800"
			>
				{#each Object.entries(kits) as [key, kit]}
					<option value={key}>{kit.name}</option>
				{/each}
			</select>
			<div class="w-32">
				<p class="flex justify-between text-xs text-stone-600">
					<span>volume</span>
					<span>
						{drumState.volume}db
					</span>
				</p>
				<input
					type="range"
					min="-24"
					max="4"
					step="1"
					bind:value={drumState.volume}
					class="h-6 w-full cursor-pointer accent-amber-500"
				/>
			</div>
			<div class="w-32">
				<p class="flex justify-between text-xs text-stone-600">
					<span>swing</span>
					<span>
						{drumState.swing}
					</span>
				</p>
				<input
					type="range"
					min="0"
					max="1"
					step="0.1"
					bind:value={drumState.swing}
					class="h-6 w-full cursor-pointer accent-amber-500"
				/>
			</div>
		</div>
	</div>
	<div class="flex flex-1 items-end gap-2 border-y border-stone-800 bg-stone-950 px-6 py-1">
		{#each drumState.fft as value, index (index)}
			<div
				class="inline-block h-full min-w-0 flex-1 bg-drum-volume"
				style:clip-path={`inset(${100 - clamp(0, value * 100, 100)}% 0 0 0)`}
			></div>
		{/each}
	</div>

	<div class="space-y-1.5 p-6 pl-0">
		<div class="flex">
			<div class="min-w-0 flex-1"></div>
			<div class="flex flex-none gap-1.5 text-center text-xs">
				{#each { length: 16 } as _, index}
					{@const isBeat = (index + 1) % 4 === 1}
					<p
						class={[
							'w-8 rounded-sm',
							drumState.activeBeat === index
								? 'bg-amber-800/50 text-white'
								: isBeat
									? 'text-white'
									: 'text-white/50'
						]}
					>
						{#if isBeat}
							{index / 4 + 1}
						{:else}
							&middot;
						{/if}
					</p>
				{/each}
			</div>
			<div class="ml-3 flex flex-none gap-1.5">
				<div class="w-7"></div>
				<div class="w-7"></div>
			</div>
		</div>
		{#each entriesOf(kits[drumState.kit].lines) as [key, line]}
			<div
				class={[
					'flex items-center',
					(hasSolo ? !drumState.lines[key].solo : drumState.lines[key].muted) && 'opacity-50'
				]}
			>
				<p class="mr-3 min-w-0 flex-1 text-right text-xs">{line.name}</p>
				<div class="flex flex-none gap-1.5">
					{#each { length: 16 } as _, index}
						<button
							onclick={() => {
								drumState.lines[key].beats[index] = !drumState.lines[key].beats[index];
							}}
							class="size-8 rounded-sm border border-stone-700 p-0.5 shadow-inner transition hover:border-stone-500 hover:bg-stone-700"
						>
							<span class="sr-only">
								Toggle {line.name} on beat {index + 1}
							</span>
							<div
								class={[
									'size-full rounded-xs bg-radial from-amber-400 to-amber-500',
									!drumState.lines[key].beats[index] && 'scale-90 opacity-0 duration-100',
									drumState.activeBeat === index ? 'brightness-125' : 'transition'
								]}
							></div>
						</button>
					{/each}
				</div>
				<div class="ml-3 flex flex-none gap-1.5">
					<button
						disabled={hasSolo}
						onclick={() => {
							drumState.lines[key].muted = !drumState.lines[key].muted;
						}}
						class={[
							'size-7 rounded-sm border text-sm transition',
							hasSolo
								? 'border-stone-600 opacity-50'
								: drumState.lines[key].muted
									? 'border-amber-600 bg-amber-600 hover:border-amber-700 hover:bg-amber-700'
									: 'border-stone-600 bg-stone-800 hover:border-amber-600 hover:bg-amber-800'
						]}
						title="Mute"
					>
						M
					</button>
					<button
						onclick={() => {
							drumState.lines[key].solo = !drumState.lines[key].solo;
						}}
						class={[
							'size-7 rounded-sm border text-sm transition',
							drumState.lines[key].solo
								? 'border-amber-600 bg-amber-600'
								: 'border-stone-600 bg-stone-800 hover:border-amber-600 hover:bg-amber-800'
						]}
						title="Solo"
					>
						S
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>

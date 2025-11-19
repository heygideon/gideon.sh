<script lang="ts">
	import { onMount } from 'svelte';
	import { format } from 'date-fns';
	import { TZDate } from '@date-fns/tz';
	import type { TransitionConfig } from 'svelte/transition';
	import { cubicBezier } from '$lib/cubic-bezier';

	let date = $state.raw(TZDate.tz('Europe/London'));
	onMount(() => {
		const interval = setInterval(() => {
			date = TZDate.tz('Europe/London');
		}, 1000);
		return () => clearInterval(interval);
	});

	// GMT/BST
	let isSummerTime = $derived(date.getTimezoneOffset() !== 0);

	let timeChars = $derived(format(date, 'HH:mm:ss').split(''));
	let dateStr = $derived(format(date, 'dd/MM/yyyy'));

	function tick(
		node: Element,
		{ delay = 0, duration = 400 } = {},
		{ direction }: { direction: 'in' | 'out' | 'both' }
	): TransitionConfig {
		let transform = getComputedStyle(node).transform;
		if (transform === 'none') {
			transform = '';
		}

		if (direction === 'both') {
			throw new Error("Use 'in:' or 'out:' direction for tick transition.");
		}
		const m = direction === 'in' ? 100 : -100;
		return {
			delay,
			duration,
			easing: cubicBezier(1, 0, 0, 1),
			css: (t, u) => `transform: ${transform} translateY(${u * m}%); opacity: ${t}`
		};
	}
</script>

<div
	title={`Europe/London ${isSummerTime ? '(BST)' : '(GMT)'}`}
	class="group relative -mx-2 flex h-10 flex-col items-end justify-center rounded-sm border border-transparent px-2 transition hover:border-stone-300/50 hover:bg-white/50"
>
	<p class="inline-flex items-baseline text-sm leading-none tracking-tighter tabular-nums">
		{#each timeChars as char, i}
			{@const opts = { delay: (timeChars.length - 1 - i) * 15 }}
			<span class="number">
				{#key char}
					<span in:tick={opts} out:tick={opts}>{char}</span>
				{/key}
			</span>
		{/each}
	</p>
	<p class="mt-0.5 text-sm leading-none tracking-tighter tabular-nums">{dateStr}</p>
</div>

<style>
	.number {
		position: relative;
		display: inline-block;
		height: 1em;
		overflow: clip;
		display: grid;

		& > span {
			grid-column-start: 1;
			grid-row-start: 1;
		}
	}
</style>

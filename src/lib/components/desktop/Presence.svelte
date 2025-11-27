<script lang="ts">
	import { fade } from 'svelte/transition';
	import { getPresence } from '../../../routes/[...rest]/presence.remote';

	const query = getPresence();
	const presence = $derived(query.current?.presence);
</script>

<svelte:window
	onvisibilitychange={() => {
		if (document.visibilityState === 'visible') {
			query.refresh();
		}
	}}
/>

{#if presence}
	<div
		in:fade={{ duration: 150 }}
		class="pointer-events-none fixed inset-x-0 top-0 flex items-center justify-center gap-1.5 p-4"
	>
		{#if presence === 'active'}
			<div class="flex items-center gap-1">
				<span
					role="img"
					aria-label="Presence"
					class="mt-0.5 inline-block size-2.5 rounded-full bg-radial from-emerald-500 to-emerald-600"
				></span>
				<span class="text-sm font-medium text-emerald-700">online</span>
			</div>
		{:else}
			<div class="flex items-center gap-1">
				<span
					role="img"
					aria-label="Presence"
					class="mt-0.5 inline-block size-2.5 rounded-full bg-radial from-stone-400 to-stone-500"
				></span>
				<span class="text-sm font-medium text-stone-600">offline</span>
			</div>
		{/if}
		<span class="text-sm text-stone-600">/</span>
		<span class="text-sm text-stone-600">United Kingdom</span>
	</div>
{/if}

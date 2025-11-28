<script module lang="ts">
	import { type Snippet } from 'svelte';

	export interface WindowProps {
		id: string;
		width: number;
		height: number;
		children?: Snippet;
	}
</script>

<script lang="ts">
	import WindowDesktop from './WindowDesktop.svelte';
	import WindowMobile from './WindowMobile.svelte';

	const props: WindowProps = $props();

	let width = $state(window.innerWidth);
	let isDesktop = $derived(width >= 1024);
</script>

{#if isDesktop}
	<WindowDesktop {...props} />
{:else}
	<WindowMobile {...props} />
{/if}

<svelte:window bind:innerWidth={width} />

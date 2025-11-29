<script lang="ts">
	import '@fontsource-variable/crimson-pro/wght.css';
	import '@fontsource-variable/crimson-pro/wght-italic.css';
	import './layout.css';

	import favicon from '$lib/assets/favicon.png';
	import og from '$lib/assets/og.png';

	import Background from '$lib/components/desktop/Background.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	let loaded = $state(false);
	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Gideon's website</title>
	<meta name="description" content="heygideon's little corner of the interwebs" />
	<meta property="og:title" content="Gideon's website" />
	<meta property="og:description" content="heygideon's little corner of the interwebs" />
	<meta property="og:image" content={`https://gideon.sh${og}`} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gideon.sh" />
</svelte:head>

<div class="bg fixed inset-0 -z-10 size-full"></div>
<Background />

{@render children()}

{#if !loaded}
	<div class="fixed top-4 right-4 flex items-center">
		<span class="animate-load-text font-pxl text-xs text-stone-600">loading</span>
	</div>
{/if}

<style>
	.bg {
		background:
			url('$lib/assets/images/noise.png') center/auto repeat,
			url('$lib/assets/images/bg.svg') center/cover no-repeat;
	}

	.animate-load-text {
		&::before {
			content: '';
			animation: load-text-b 0.5s steps(4) infinite;
			margin-right: 0.5rem;
		}
		&::after {
			content: '';
			white-space: pre;
			animation: load-text-a 1s steps(4) infinite;
		}
	}
	@keyframes load-text-b {
		0%,
		100% {
			content: '[-]';
		}
		25% {
			content: '[\\]';
		}
		50% {
			content: '[|]';
		}
		75% {
			content: '[/]';
		}
	}
	@keyframes load-text-a {
		0%,
		100% {
			content: '   ';
		}
		25% {
			content: '.  ';
		}
		50% {
			content: '.. ';
		}
		75% {
			content: '...';
		}
	}
</style>

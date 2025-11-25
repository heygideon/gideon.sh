<script lang="ts">
	import '@fontsource-variable/crimson-pro/wght.css';
	import '@fontsource-variable/crimson-pro/wght-italic.css';
	import './layout.css';

	import favicon from '$lib/assets/favicon.svg';

	import Background from '$lib/components/desktop/Background.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg fixed inset-0 -z-10 size-full"></div>
<Background />

{@render children()}

<style>
	.bg {
		background:
			url('$lib/assets/images/noise.png') center/auto repeat,
			url('$lib/assets/images/bg.svg') center/cover no-repeat;
	}
</style>

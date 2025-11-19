<script lang="ts">
	import '@fontsource-variable/crimson-pro';
	import './layout.css';

	import favicon from '$lib/assets/favicon.svg';

	import background from '$lib/assets/images/bg.svg';
	import noise from '$lib/assets/images/noise.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg fixed inset-0 -z-10 size-full"></div>

{@render children()}

<style>
	.bg {
		background:
			url('$lib/assets/images/noise.png') center/auto repeat,
			url('$lib/assets/images/bg.svg') center/cover no-repeat;
	}
</style>

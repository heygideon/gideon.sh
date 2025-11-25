<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	import FolderOpen from 'phosphor-svelte/lib/FolderOpen';

	import type { PageData } from '../../routes/[...rest]/$types';
	import { getContext } from 'svelte';

	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const pageData = getContext<() => PageData>('pageData');
	let projects = $derived(pageData().projects);

	let projectSlug = $state('');
	let project = $derived(projects.find((p) => p.slug === projectSlug));
	$effect(() => {
		const parts = page.params.rest?.split('/');
		if (!parts || parts[0] !== 'work') return;
		if (parts.length > 1) {
			projectSlug = parts[1];
		} else {
			projectSlug = '';
		}
	});
</script>

{#if !!project}
	<div class="p-6">
		<button
			onclick={() => {
				goto('/work');
			}}
			class="h-7 rounded-sm border border-stone-300 bg-stone-50 px-2.5 text-sm transition hover:border-amber-600 hover:bg-amber-100"
		>
			Back
		</button>
		<p class="mt-4 text-2xl leading-tight font-semibold">
			{project.title}
		</p>
		<p class="text-2xl leading-tight">
			{project.subtitle}
		</p>
		<p class="mt-1.5 text-stone-600">{project.for}, {MONTHS[project.month - 1]} {project.year}</p>
		<div class="-mx-1 mt-6 rounded-lg border border-stone-300 bg-stone-50 p-1">
			<img
				src={project.image.src}
				alt={project.image.alt}
				class="aspect-video w-full rounded-sm shadow-xs"
			/>
		</div>
		<div class="c-prose mt-6">
			{@html project.html}
		</div>
	</div>
{:else}
	<div class="p-6 pb-3">
		<p class="text-2xl leading-tight font-semibold">Things I've made</p>
		<div class="mt-1 flex items-center gap-1.5 text-stone-600">
			<FolderOpen class="size-4" />
			<span class="">Folder &middot; {projects.length} items</span>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-0.5 p-3">
		{#each projects as project}
			<button
				ondblclick={() => {
					goto(`/work/${project.slug}`);
				}}
				class="h-fit rounded-sm border border-transparent p-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
			>
				<div class="rounded-lg border border-stone-300 bg-stone-50 p-1">
					<img
						src={project.image.src}
						alt={project.image.alt}
						class="aspect-video w-full rounded-sm shadow-xs"
					/>
				</div>
				<p class="mt-2 truncate text-lg leading-snug font-semibold">
					{project.title}
				</p>
				<p class="mt-0.5 line-clamp-2 leading-snug text-stone-600">
					{project.subtitle}
				</p>
			</button>
		{/each}
	</div>
{/if}

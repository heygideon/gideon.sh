<script lang="ts">
	import { onMount } from 'svelte';

	const SQUARE_SIZE = 64;

	// Hide the background until the page has loaded
	let loaded = $state(false);
	onMount(() => {
		loaded = true;
	});

	let container: HTMLDivElement;

	let offsetWidth = $state<number>(0);
	let offsetHeight = $state<number>(0);

	let columns = $derived(Math.ceil(offsetWidth / SQUARE_SIZE));
	let rows = $derived(Math.ceil(offsetHeight / SQUARE_SIZE));

	let mouseX = $state<number>(0);
	let mouseY = $state<number>(0);

	let relativeX = $derived.by(() => {
		const colsWidth = columns * SQUARE_SIZE;
		const padLeft = (offsetWidth - colsWidth) / 2;
		return Math.min(Math.max(mouseX - padLeft, 0), colsWidth);
	});
	let relativeY = $derived.by(() => {
		const rowsHeight = rows * SQUARE_SIZE;
		const padTop = (offsetHeight - rowsHeight) / 2;
		return Math.min(Math.max(mouseY - padTop, 0), rowsHeight);
	});

	let windowIsHovered = $state(false);
	let isHovered = $derived(windowIsHovered && relativeY > 0 && relativeY < offsetHeight);
	let activeSquareX = $derived(Math.floor(relativeX / SQUARE_SIZE));
	let activeSquareY = $derived(Math.floor(relativeY / SQUARE_SIZE));
</script>

<svelte:window
	onmousemove={(e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
		windowIsHovered = true;
	}}
	onmouseover={() => {
		windowIsHovered = true;
	}}
	onmouseout={() => {
		windowIsHovered = false;
	}}
/>

<div
	bind:this={container}
	bind:offsetWidth
	bind:offsetHeight
	class={[
		'absolute inset-0 -z-10 flex flex-col items-center justify-center overflow-clip transition-opacity duration-300',
		!loaded && 'opacity-0'
	]}
>
	{#each { length: rows }, row}
		<div class="flex flex-none">
			{#each { length: columns }, col}
				<div
					style="width: {SQUARE_SIZE}px; height: {SQUARE_SIZE}px;"
					class={[
						'flex-none border-r border-b border-black/4 transition',
						isHovered ? 'duration-100' : 'duration-300',
						isHovered && {
							'bg-amber-300': activeSquareX === col && activeSquareY === row,
							'bg-amber-300/50':
								Math.abs(activeSquareX - col) + Math.abs(activeSquareY - row) === 1,
							'bg-amber-300/25':
								Math.abs(activeSquareX - col) + Math.abs(activeSquareY - row) === 2,
							'bg-amber-300/10':
								Math.abs(activeSquareX - col) + Math.abs(activeSquareY - row) === 3,
							'bg-amber-300/5': Math.abs(activeSquareX - col) + Math.abs(activeSquareY - row) === 4
						}
					]}
				>
					<div
						class={[
							'size-full ring-amber-400 transition',
							isHovered ? 'duration-100' : 'duration-300',
							isHovered && activeSquareX === col && activeSquareY === row && 'ring-1'
						]}
					></div>
				</div>
			{/each}
		</div>
	{/each}
</div>

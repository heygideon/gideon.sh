<script lang="ts">
	import FolderOpen from 'phosphor-svelte/lib/FolderOpen';

	import youthacks from '$lib/assets/projects/youthacks-cover.png';
	import blueCoatSchool from '$lib/assets/projects/blue-coat-school-cover.png';
	import paRaspberryPi from '$lib/assets/projects/pa-raspberry-pi-cover.png';

	let expanded = $state(false);
</script>

{#if expanded}
	<div class="p-6">
		<button
			onclick={() => {
				expanded = false;
			}}
			class="h-7 rounded-sm border border-stone-300 bg-stone-50 px-2.5 text-sm transition hover:border-amber-600 hover:bg-amber-100"
		>
			Back
		</button>
		<p class="mt-4 text-2xl leading-tight font-semibold">
			An app to order and collect prescriptions from lockers.
		</p>
		<p class="text-2xl leading-tight">
			Saving time + freeing up pharmacies for those who need it most.
		</p>
		<p class="mt-1.5 text-stone-600">PA Raspberry Pi Competition, 2025</p>
		<div class="-mx-1 mt-6 rounded-lg border border-stone-300 bg-stone-50 p-1">
			<img src={paRaspberryPi} alt="" class="aspect-video w-full rounded-sm shadow-xs" />
		</div>
		<p class="mt-6 text-xl leading-relaxed text-stone-800">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut elementum dolor. In
			consequat ornare velit, et elementum ex aliquet sed. Aenean varius porttitor justo, at aliquam
			enim rhoncus in. Fusce laoreet erat at dictum laoreet. Proin blandit suscipit velit, nec
			semper purus vulputate sed. Aenean mollis diam a dolor dictum, ac scelerisque quam eleifend.
			Ut accumsan aliquet risus ut tempor. Proin gravida a nisi sed ullamcorper. Mauris mi dui,
			dapibus at vestibulum eget, lobortis at odio. Nullam quis dui sit amet dui sollicitudin
			imperdiet eu ut nisi. Duis vitae egestas purus. Mauris finibus sodales congue. Maecenas quis
			orci risus. Proin sed enim nulla.
		</p>
		<p class="mt-3 text-xl leading-relaxed text-stone-800">
			Aenean at elit a leo fermentum placerat at et nisi. Sed et orci non orci fringilla accumsan.
			Donec sit amet diam sed leo viverra aliquam. Duis consequat fermentum dolor, id mattis justo
			elementum eu. Sed dictum nec risus at eleifend. Etiam sagittis, massa sit amet ornare
			imperdiet, turpis arcu faucibus dui, ut mattis augue augue nec arcu. In ut condimentum lectus.
			Nulla rutrum nunc nunc, vitae mollis arcu interdum at. Praesent odio risus, facilisis quis
			congue facilisis, convallis et urna. Suspendisse nisi mi, rhoncus ut mollis sit amet,
			elementum in sem. Vestibulum nibh mauris, euismod vel lacinia sit amet, sodales eget odio.
			Morbi sem elit, lacinia at velit tincidunt, sollicitudin vulputate velit. Sed cursus metus sed
			mauris ultrices eleifend.
		</p>
	</div>
{:else}
	<div class="p-6 pb-3">
		<p class="text-2xl leading-tight font-semibold">Things I've made</p>
		<div class="mt-1 flex items-center gap-1.5 text-stone-600">
			<FolderOpen class="size-4" />
			<span class="">Folder &middot; 3 items</span>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-0.5 p-3">
		<button
			ondblclick={() => {
				expanded = true;
			}}
			class="h-fit rounded-sm border border-transparent p-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
		>
			<div class="rounded-lg border border-stone-300 bg-stone-50 p-1">
				<img src={youthacks} alt="" class="aspect-video w-full rounded-sm shadow-xs" />
			</div>
			<p class="mt-2 truncate text-lg leading-snug font-semibold">
				A website for promoting student-led hackathons
			</p>
			<p class="mt-0.5 line-clamp-2 leading-snug text-stone-600">
				Showcasing an organisation's impact and encouraging more students to get involved in
				technology.
			</p>
		</button>
		<button
			ondblclick={() => {
				expanded = true;
			}}
			class="h-fit rounded-sm border border-transparent p-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
		>
			<div class="rounded-lg border border-stone-300 bg-stone-50 p-1">
				<img src={paRaspberryPi} alt="" class="aspect-video w-full rounded-sm shadow-xs" />
			</div>
			<p class="mt-2 truncate text-lg leading-snug font-semibold">
				An app to order and collect prescriptions from lockers
			</p>
			<p class="mt-0.5 line-clamp-2 leading-snug text-stone-600">
				Saving time + freeing up pharmacies for those who need it most.
			</p>
		</button>
		<button
			ondblclick={() => {
				expanded = true;
			}}
			class="h-fit rounded-sm border border-transparent p-3 text-left hover:bg-amber-100 focus:border-amber-600 focus:bg-amber-100"
		>
			<div class="rounded-lg border border-stone-300 bg-stone-50 p-1">
				<img src={blueCoatSchool} alt="" class="aspect-video w-full rounded-sm shadow-xs" />
			</div>
			<p class="mt-2 truncate text-lg leading-snug font-semibold">
				An interactive leaderboard for sports events.
			</p>
			<p class="mt-0.5 line-clamp-2 leading-snug text-stone-600">
				Making a school sports week more fun and engaging for students.
			</p>
		</button>
	</div>
{/if}

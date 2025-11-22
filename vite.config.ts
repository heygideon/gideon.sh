import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import contentCollections from '@content-collections/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		// @ts-expect-error _pluginContextMap type
		contentCollections(),
		sveltekit()
	]
});

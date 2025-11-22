import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMarkdown } from '@content-collections/markdown';
import { z } from 'zod';

const projects = defineCollection({
	name: 'projects',
	directory: 'src/content/projects',
	include: '**/*.md',
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		for: z.string(),
		year: z.number(),
		month: z.number(),

		image: z.object({
			id: z.string(),
			alt: z.string()
		}),
		content: z.string()
	}),
	transform: async (doc, context) => {
		const slug = doc._meta.fileName.match(/(.*)\.md$/)![1];
		const html = await compileMarkdown(context, doc);

		return { ...doc, slug, html, content: undefined };
	}
});

export default defineConfig({
	collections: [projects]
});

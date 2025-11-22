import { allProjects } from 'content-collections';
import type { PageServerLoad } from './$types';

async function getPlaceholderWebring() {
	const res = await fetch('https://webring.phthallo.com/api/members');
	const data = (await res.json()) as Record<
		string,
		{
			name: string;
			description: string;
			website: string;
			img: string;
		}
	>;

	return Object.values(data).filter((item) => item.name.toLowerCase() !== 'gideon');
}

export const load: PageServerLoad = async () => {
	const placeholder = await getPlaceholderWebring();
	const projects = await Promise.all(
		allProjects
			.toSorted((a, b) => b.year - a.year || b.month - a.month)
			.map(async (project) => {
				const resolvedImage: string = await import(
					`$lib/assets/projects/${project.image.id}.png`
				).then((mod) => mod.default);
				return {
					...project,
					image: { ...project.image, src: resolvedImage }
				};
			})
	);

	return { webrings: { placeholder }, projects };
};

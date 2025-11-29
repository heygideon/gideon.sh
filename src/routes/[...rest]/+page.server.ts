import { allProjects } from 'content-collections';
import type { PageServerLoad } from './$types';

async function getPlaceholderWebring() {
	const res = await fetch('https://webring.phthallo.com/api/members');
	const data = (await res.json()) as Array<{
		name: string;
		description: string;
		website: string;
		img: string;
	}>;
	console.log(data);

	return data.filter((item) => item.name.toLowerCase() !== 'gideon');
}

async function getProjects() {
	const projectsPromises = allProjects
		.toSorted((a, b) => b.year - a.year || b.month - a.month)
		.map(async (project) => {
			const resolvedImage: string = await import(
				`$lib/assets/projects/${project.image.id}.png`
			).then((mod) => mod.default);
			return {
				...project,
				image: { ...project.image, src: resolvedImage }
			};
		});

	const projects = await Promise.all(projectsPromises);
	return projects;
}

export const load: PageServerLoad = async () => {
	const placeholder = await getPlaceholderWebring();
	const projects = await getProjects();

	return { webrings: { placeholder }, projects };
};

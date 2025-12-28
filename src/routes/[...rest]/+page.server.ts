import { allProjects } from 'content-collections';
import type { PageServerLoad } from './$types';

interface WebringMember {
	name: string;
	url: string;
	imgUrl: string;
}
const defineWebringMember = <T extends WebringMember>(member: T) => member;

async function getPlaceholderWebring() {
	const res = await fetch('https://webring.phthallo.com/api/members');
	const data = (await res.json()) as Array<{
		name: string;
		description: string;
		website: string;
		img: string;
	}>;

	return data
		.filter((item) => item.name.toLowerCase() !== 'gideon')
		.map((item) =>
			defineWebringMember({
				name: item.name,
				url: item.website,
				imgUrl: item.img
			})
		);
}

async function getPageWebring() {
	const res = await fetch('https://pagering.gideon.sh/api/v1/members');
	const data = (await res.json()) as Array<{
		id: string;
		name: string;
		url: string;
		buttonUrl: string;
	}>;

	return data
		.filter((item) => item.name.toLowerCase() !== 'gideon')
		.map((item) =>
			defineWebringMember({
				name: item.name,
				url: item.url,
				imgUrl: item.buttonUrl
			})
		);
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
	const projects = await getProjects();

	const page_ringPromise = getPageWebring();
	const placeholderPromise = getPlaceholderWebring();

	const webringsPromise = (async () => ({
		page_ring: await page_ringPromise,
		placeholder: await placeholderPromise
	}))();

	return { webringsPromise, projects };
};

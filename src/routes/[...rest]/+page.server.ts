import { allProjects } from 'content-collections';
import type { PageServerLoad } from './$types';
import neocats from '$lib/assets/neocat';

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

async function getHackClubWebring() {
	return [
		defineWebringMember({
			name: 'acon',
			url: 'https://aconlin.com',
			imgUrl: '/buttons/acon.gif'
		}),
		defineWebringMember({
			name: 'bomberfish',
			url: 'https://bomberfish.ca',
			imgUrl: 'https://bomberfish.ca/button.gif'
		}),
		defineWebringMember({
			name: 'junya',
			url: 'https://cutiesin.tech',
			imgUrl: 'https://cutiesin.tech/88x31/junya.gif'
		}),
		defineWebringMember({
			name: 'froppii',
			url: 'https://froppii.dev',
			imgUrl: 'https://froppii.dev/button.gif'
		}),
		defineWebringMember({
			name: 'valen',
			url: 'https://valen.zip',
			imgUrl: 'https://valen.zip/button-win98.gif'
		}),
		defineWebringMember({
			name: 'prpl',
			url: 'https://prpl.wtf/',
			imgUrl: 'https://prpl.wtf/img/88x31/prpl_wtf.gif'
		}),
		defineWebringMember({
			name: 'vvqb',
			url: 'https://vvqb.dev',
			imgUrl: '/buttons/vvqb.gif'
		}),
		defineWebringMember({
			name: 'kyle',
			url: 'https://codingcorner.dev',
			imgUrl: 'https://codingcorner.dev/buttons/codingcorner.png'
		}),
		defineWebringMember({
			name: 'sarvesh',
			url: 'https://sarvesh.hackclub.app/',
			imgUrl: '/buttons/tarfish.png'
		}),
		defineWebringMember({
			name: 'dipa',
			url: 'https://dipa-cotton.github.io/personalsite/',
			imgUrl: '/buttons/dipa.png'
		}),
		defineWebringMember({
			name: 'pk_industries',
			url: 'https://pkindustry.org/',
			imgUrl: '/buttons/pkindustries.png'
		})
	];
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
	const page_ring = await getPageWebring();
	// const hack_club = await getHackClubWebring();
	const projects = await getProjects();

	const neocatIdx = Math.floor(Math.random() * neocats.length);

	return { webrings: { placeholder, page_ring }, projects, neocatIdx };
};

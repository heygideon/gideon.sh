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

	return { webrings: { placeholder } };
};

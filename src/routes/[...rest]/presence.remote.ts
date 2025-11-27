import { query } from '$app/server';
import { ofetch } from 'ofetch';
import { env } from '$env/dynamic/private';

type PresenceResponse = {
	ok: undefined;
	presence?: 'active' | 'away';
	error?: undefined;
};

export const getPresence = query(async () => {
	const response = await ofetch<PresenceResponse>('https://slack.com/api/users.getPresence', {
		headers: {
			Authorization: `Bearer ${env.SLACK_TOKEN}`
		},
		query: {
			user: 'U09D42Q0ARJ'
		}
	});

	return { presence: response.presence || 'away' };
});

import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { page } from '$app/state';
import type { views } from './views';

interface WindowEntry {
	id: string;
	view: keyof typeof views;
	rest: string;
	pos: { x: number; y: number };
	minimised: boolean;
}

export const routerState = $state({
	windows: [] as WindowEntry[],
	order: [] as string[]
});

export function openWindow(view: keyof typeof views, rest?: string) {
	const id = crypto.randomUUID();
	routerState.windows.push({
		id,
		view,
		rest: rest || view,
		pos: { x: 0, y: 0 },
		minimised: false
	});
	routerState.order.push(id);
}

export function deleteWindow(id: string) {
	routerState.windows = routerState.windows.filter((w) => w.id !== id);
	routerState.order = routerState.order.filter((wId) => wId !== id);

	const active = routerState.windows.find((w) => w.id === routerState.order.at(-1));
	if (active) {
		goto(resolve('/[...rest]', { rest: active.rest }), {});
	} else {
		goto(resolve('/'), {});
	}
}

export function bringWindowToFront(id: string, rest?: string) {
	routerState.order = routerState.order.filter((wId) => wId !== id);
	routerState.order.push(id);

	const idx = routerState.windows.findIndex((w) => w.id === id);
	if (idx !== -1) {
		if (rest) {
			routerState.windows[idx].rest = rest;
		} else if (page.params.rest !== routerState.windows[idx].rest) {
			goto(resolve('/[...rest]', { rest: routerState.windows[idx].rest }), {});
		}
	}
}

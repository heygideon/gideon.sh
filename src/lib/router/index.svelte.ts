import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { page } from '$app/state';
import {
	windowCloseSound,
	windowMinimiseSound,
	windowOpenSound,
	windowRestoreSound
} from '$lib/sfx';
import type { views } from './views';
import { v4 as uuid } from 'uuid';

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
	const id = uuid();
	routerState.windows.push({
		id,
		view,
		rest: rest || view,
		pos: { x: 0, y: 0 },
		minimised: false
	});
	routerState.order.push(id);

	windowOpenSound.play();
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

	windowCloseSound.play();
}

export function bringWindowToFront(id: string, rest?: string) {
	routerState.order = routerState.order.filter((wId) => wId !== id);
	routerState.order.push(id);

	const idx = routerState.windows.findIndex((w) => w.id === id);
	if (idx === -1) return;

	if (routerState.windows[idx].minimised) {
		routerState.windows[idx].minimised = false;
		windowRestoreSound.play();
	}

	if (rest) {
		routerState.windows[idx].rest = rest;
	} else if (page.params.rest !== routerState.windows[idx].rest) {
		goto(resolve('/[...rest]', { rest: routerState.windows[idx].rest }), {});
	}

	const el = document.getElementById(`window-${id}`);
	if (el) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) {
					routerState.windows[idx].pos = { x: 0, y: 0 };
				}
				observer.disconnect();
			},
			{ threshold: 0, rootMargin: '0px 0px -48px 0px' }
		);
		observer.observe(el);
	}
}

export function setWindowPosition(id: string, pos: { x: number; y: number }) {
	const idx = routerState.windows.findIndex((w) => w.id === id);
	if (idx !== -1) {
		routerState.windows[idx].pos = pos;
	}
}

export function minimiseWindow(id: string) {
	const idx = routerState.windows.findIndex((w) => w.id === id);
	if (idx === -1) return;

	routerState.windows[idx].minimised = true;
	routerState.order = routerState.order.filter((wId) => wId !== id);

	const active = routerState.windows.find((w) => w.id === routerState.order.at(-1));
	if (active) {
		goto(resolve('/[...rest]', { rest: active.rest }), {});
	} else {
		goto(resolve('/'), {});
	}

	windowMinimiseSound.play();
}

export function showDesktop() {
	routerState.windows.forEach((w) => {
		w.minimised = true;
	});
	routerState.order = [];
	goto(resolve('/'), {});
}

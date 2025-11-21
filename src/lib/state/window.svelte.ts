import type { Component } from 'svelte';

import About from '$lib/views/About.svelte';
import Projects from '$lib/views/Projects.svelte';
import Friends from '$lib/views/Friends.svelte';
import Contact from '$lib/views/Contact.svelte';

import rocket from '$lib/assets/images/rocket.png';
import smile from '$lib/assets/images/smile.png';
import globe from '$lib/assets/images/globe.png';
import message from '$lib/assets/images/message.png';

type WindowName = 'about' | 'projects' | 'friends' | 'contact';

interface WindowMapItem {
	component: Component;
	title: string;
	icon: string;
	size: { width: number; height: number };
}
export const windowMap: Record<WindowName, WindowMapItem> = {
	projects: {
		component: Projects,
		title: 'Projects',
		icon: rocket,
		size: { width: 640, height: 480 }
	},
	about: {
		component: About,
		title: 'About',
		icon: smile,
		size: { width: 640, height: 480 }
	},
	friends: {
		component: Friends,
		title: 'Friends',
		icon: globe,
		size: { width: 640, height: 480 }
	},
	contact: {
		component: Contact,
		title: 'Say hi!',
		icon: message,
		size: { width: 640, height: 480 }
	}
};

interface WindowItem {
	id: string;
	name: WindowName;
	pos: { x: number; y: number };
	minimised: boolean;
}

export const windowState = $state({
	windows: [] as WindowItem[],
	order: [] as string[]
});

export function openWindow(name: WindowName) {
	const id = crypto.randomUUID();
	windowState.windows.push({
		id,
		name,
		pos: { x: 0, y: 0 },
		minimised: false
	});
	windowState.order.push(id);
}

export function deleteWindow(id: string) {
	windowState.windows = windowState.windows.filter((w) => w.id !== id);
}

export function bringWindowToFront(id: string) {
	windowState.order = windowState.order.filter((wId) => wId !== id);
	windowState.order.push(id);
}

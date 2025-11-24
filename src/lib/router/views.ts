import type { Component } from 'svelte';

import About from '$lib/views/About.svelte';
import Projects from '$lib/views/Projects.svelte';
import Friends from '$lib/views/Friends.svelte';
import Contact from '$lib/views/Contact.svelte';

import rocket from '$lib/assets/images/rocket.png';
import smile from '$lib/assets/images/smile.png';
import drum from '$lib/assets/images/drum.png';
import globe from '$lib/assets/images/globe.png';
import message from '$lib/assets/images/message.png';
import DrumMachine from '$lib/views/DrumMachine.svelte';

/*
  - views.ts
	- regexparam for routing
	- afternavigate listener
 */

interface View {
	title: string;
	icon: string;
	component: Component;
	size: { width: number; height: number };
}
export const views = {
	work: {
		title: 'Projects',
		icon: rocket,
		component: Projects,
		size: { width: 800, height: 640 }
	},
	about: {
		title: 'About',
		icon: smile,
		component: About,
		size: { width: 640, height: 480 }
	},
	drum: {
		component: DrumMachine,
		title: 'Fun',
		icon: drum,
		size: { width: 800, height: 640 }
	},
	friends: {
		title: 'Friends',
		icon: globe,
		component: Friends,
		size: { width: 640, height: 480 }
	},
	contact: {
		title: 'Say hi!',
		icon: message,
		component: Contact,
		size: { width: 640, height: 320 }
	}
} satisfies Record<string, View>;

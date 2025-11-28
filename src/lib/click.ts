import type { Attachment } from 'svelte/attachments';

export function click(fn: (ev: Event) => void): Attachment {
	const onClick = (ev: Event) => {
		if (!window.matchMedia('(pointer: coarse)').matches) return;
		fn(ev);
	};
	const onDblClick = (ev: Event) => {
		if (window.matchMedia('(pointer: coarse)').matches) return;
		fn(ev);
	};

	return (node) => {
		node.addEventListener('click', onClick);
		node.addEventListener('dblclick', onDblClick);

		return () => {
			node.removeEventListener('click', onClick);
			node.removeEventListener('dblclick', onDblClick);
		};
	};
}

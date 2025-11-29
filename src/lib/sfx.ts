import { Howl } from 'howler';

export const windowOpenSound = new Howl({
	src: ['/sfx/window-open.mp3'],
	volume: 0.5
});
export const windowCloseSound = new Howl({
	src: ['/sfx/window-close.mp3'],
	volume: 0.5
});
export const windowMinimiseSound = new Howl({
	src: ['/sfx/window-minimise.mp3'],
	volume: 0.25
});
export const windowRestoreSound = new Howl({
	src: ['/sfx/window-restore.mp3'],
	volume: 0.25
});
export const clickSound = new Howl({
	src: ['/sfx/click.mp3'],
	volume: 0.5
});

export const dialSound = new Howl({
	src: ['/sfx/dial.mp3'],
	sprite: {
		'1': [30, 30],
		'2': [333, 30],
		'3': [660, 30]
	},
	volume: 0.15
});
export const playDialSound = () => {
	const variants = ['1', '2', '3'];
	const choice = variants[Math.floor(Math.random() * variants.length)];

	const volume = 0.05 + Math.random() * 0.1;

	dialSound.volume(volume);
	dialSound.play(choice);
};

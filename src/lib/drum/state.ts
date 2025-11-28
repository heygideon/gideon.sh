import type { kits } from './kits';

export type LineNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface SampleState {
	muted: boolean;
	solo: boolean;
	beats: boolean[];
}

export interface DrumState {
	lines: Record<LineNumber, SampleState>;
	kit: keyof typeof kits;
	tempo: number;
	volume: number;
	swing: number;

	loading: boolean;
	playing: boolean;
	activeBeat: number | null;
	fft: number[];
}

export const initialState: DrumState = {
	lines: {
		0: { muted: false, solo: false, beats: Array(16).fill(false) },
		1: { muted: false, solo: false, beats: Array(16).fill(false) },
		2: { muted: false, solo: false, beats: Array(16).fill(false) },
		3: { muted: false, solo: false, beats: Array(16).fill(false) },
		4: { muted: false, solo: false, beats: Array(16).fill(false) },
		5: { muted: false, solo: false, beats: Array(16).fill(false) },
		6: { muted: false, solo: false, beats: Array(16).fill(false) },
		7: { muted: false, solo: false, beats: Array(16).fill(false) }
	},
	kit: 'std',
	tempo: 120,
	volume: 0,
	swing: 0,

	loading: false,
	playing: false,
	activeBeat: null,
	fft: []
};

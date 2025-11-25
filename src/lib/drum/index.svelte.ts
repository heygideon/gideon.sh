import * as Tone from 'tone';
import { onMount } from 'svelte';
import { initialState, type DrumState, type LineNumber } from './state';
import { kits } from './kits';

function addIfNotExists(players: Tone.Players, name: string, url: string) {
	if (players.has(name)) return Promise.resolve();
	return new Promise<void>((resolve) => {
		players.add(name, url, () => resolve());
	});
}

export default function useDrumMachine() {
	let samples: Tone.Players;
	let loop: Tone.Sequence;
	let fft: Tone.FFT;

	const state = $state<DrumState>(initialState);

	onMount(() => {
		fft = new Tone.FFT(32);

		samples = new Tone.Players().fan(fft).toDestination();
		Tone.getTransport().start();

		loop = new Tone.Sequence(
			function (time, col) {
				const kit = state.kit;
				const hasSolo = Object.values(state.lines).some((line) => line.solo);

				for (let lineIdx = 0; lineIdx < 8; lineIdx++) {
					const line = state.lines[lineIdx as LineNumber];
					const isActive = line.beats[col];

					const instrument = kits[kit].lines[lineIdx as LineNumber];

					if (hasSolo && !line.solo) continue;
					if (!hasSolo && line.muted) continue;
					if (!isActive) continue;

					if (instrument.is === 'hat') {
						const ohatIndex = Object.entries(kits[kit].lines).findIndex(
							([, data]) => data.is === 'ohat'
						);
						if (ohatIndex !== -1) {
							const ohatLine = state.lines[ohatIndex as LineNumber];
							if (!ohatLine.beats[col]) {
								const closeSampleId = `${kit}-${ohatIndex}`;
								samples.player(closeSampleId).stop(time);
							}
						}
					}

					const sampleId = `${kit}-${lineIdx}`;
					samples.player(sampleId).start(time, 0);
				}

				Tone.getDraw().schedule(function () {
					state.activeBeat = col;
				}, time);
			},
			Array.from({ length: 16 }, (_, i) => i),
			'16n'
		);

		const fftController = new AbortController();
		const updateFFT = () => {
			if (fftController.signal.aborted) return;
			state.fft = Array.from(fft.getValue()).map((v) => (v + 140) / 140);
			requestAnimationFrame(updateFFT);
		};
		updateFFT();

		return () => {
			fftController.abort();
			samples.dispose();
			Tone.getTransport().stop();
		};
	});

	$effect(() => {
		// Load samples for the current kit
		const kit = state.kit;
		const kitSamples = Object.entries(kits[state.kit].lines);
		Promise.all(
			kitSamples.map(([line, { url }]) => addIfNotExists(samples, `${kit}-${line}`, url))
		);
	});

	$effect(() => {
		// Update tempo and swing
		const transport = Tone.getTransport();
		transport.bpm.value = state.tempo;
		transport.swing = state.swing;
		transport.swingSubdivision = '16n';
	});

	$effect(() => {
		// Update volume
		Tone.getDestination().volume.value = state.volume;
	});

	const start = async () => {
		await Tone.start();
		loop.start();
		state.playing = true;
	};
	const stop = () => {
		loop.stop();
		state.playing = false;
		state.activeBeat = null;
	};

	return {
		state,
		start,
		stop
	};
}

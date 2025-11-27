import type { LineNumber } from './state.svelte';

export interface Kit {
	name: string;
	lines: {
		[line in LineNumber]: { name: string; url: string; is?: 'hat' | 'ohat' };
	};
}

export const stdKit: Kit = {
	name: 'Standard',
	lines: {
		0: { name: 'tom-2', url: '/samples/standard/tom2.wav' },
		1: { name: 'tom', url: '/samples/standard/tom.wav' },
		2: { name: 'open-hi', url: '/samples/standard/ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/standard/hat.wav', is: 'hat' },
		4: { name: 'clap', url: '/samples/standard/clap.wav' },
		5: { name: 'snare', url: '/samples/standard/snare.wav' },
		6: { name: 'kick-2', url: '/samples/standard/kick2.wav' },
		7: { name: 'kick', url: '/samples/standard/kick.wav' }
	}
};

export const funkKit: Kit = {
	name: 'Funk',
	lines: {
		0: { name: 'crash', url: '/samples/funk/rw_cymbal.wav' },
		1: { name: 'tom', url: '/samples/funk/rw_perc_flam.wav' },
		2: { name: 'open-hi', url: '/samples/funk/rw_ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/funk/rw_hat.wav', is: 'hat' },
		4: { name: 'clap', url: '/samples/funk/rw_clap.wav' },
		5: { name: 'snare', url: '/samples/funk/rw_snare.wav' },
		6: { name: 'kick-2', url: '/samples/funk/rw_kick2.wav' },
		7: { name: 'kick', url: '/samples/funk/rw_kick.wav' }
	}
};

export const bluesKit: Kit = {
	name: 'R&B',
	lines: {
		0: { name: 'ride', url: '/samples/blues/superich_ride.wav' },
		1: { name: 'perc', url: '/samples/blues/superich_clav.wav' },
		2: { name: 'open-hi', url: '/samples/blues/superich_ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/blues/superich_hat.wav', is: 'hat' },
		4: { name: 'snare-2', url: '/samples/blues/superich_tap.wav' },
		5: { name: 'snare', url: '/samples/blues/superich_snare.wav' },
		6: { name: 'kick-2', url: '/samples/blues/superich_kick2.wav' },
		7: { name: 'kick', url: '/samples/blues/superich_kick.wav' }
	}
};

export const trapKit: Kit = {
	name: 'Trap',
	lines: {
		0: { name: 'hat-3', url: '/samples/trap/ts_hat3.wav' },
		1: { name: 'hat-2', url: '/samples/trap/ts_hat2.wav' },
		2: { name: 'open-hi', url: '/samples/trap/ts_ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/trap/ts_hat.wav', is: 'hat' },
		4: { name: 'clap', url: '/samples/trap/ts_clap.wav' },
		5: { name: 'snare', url: '/samples/trap/ts_snare.wav' },
		6: { name: 'kick-2', url: '/samples/trap/ts_kick2.wav' },
		7: { name: 'kick', url: '/samples/trap/ts_kick.wav' }
	}
};

export const eightiesKit: Kit = {
	name: "'80s",
	lines: {
		0: { name: 'crash', url: '/samples/eighties/hs_crash.wav' },
		1: { name: 'perc', url: '/samples/eighties/hs_perc.wav' },
		2: { name: 'open-hi', url: '/samples/eighties/hs_ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/eighties/hs_hat.wav', is: 'hat' },
		4: { name: 'clap', url: '/samples/eighties/hs_clap.wav' },
		5: { name: 'snare', url: '/samples/eighties/hs_snare.wav' },
		6: { name: 'kick-2', url: '/samples/eighties/hs_kick2.wav' },
		7: { name: 'kick', url: '/samples/eighties/hs_kick.wav' }
	}
};

export const houseKit: Kit = {
	name: 'House',
	lines: {
		0: { name: 'chord-E', url: '/samples/house/paris_p_E.wav' },
		1: { name: 'chord-Abm', url: '/samples/house/paris_p_Abm.wav' },
		2: { name: 'open-hi', url: '/samples/house/paris_ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/house/paris_hat.wav', is: 'hat' },
		4: { name: 'clap', url: '/samples/house/paris_clap.wav' },
		5: { name: 'snare', url: '/samples/house/snare.wav' },
		6: { name: 'tom', url: '/samples/house/low-tom.wav' },
		7: { name: 'kick', url: '/samples/house/paris_kick.wav' }
	}
};

export const technoKit: Kit = {
	name: 'Techno',
	lines: {
		0: { name: 'loop', url: '/samples/techno/berlin_loop.wav' },
		1: { name: 'synth', url: '/samples/techno/berlin_stab.wav' },
		2: { name: 'open-hi', url: '/samples/techno/berlin_ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/techno/berlin_hat.wav', is: 'hat' },
		4: { name: 'clap', url: '/samples/techno/berlin_clap.wav' },
		5: { name: 'snare', url: '/samples/techno/berlin_snare.wav' },
		6: { name: 'bass', url: '/samples/techno/berlin_bass.wav' },
		7: { name: 'kick', url: '/samples/techno/berlin_kick.wav' }
	}
};

export const indieKit: Kit = {
	name: 'Indie',
	lines: {
		0: { name: 'crash', url: '/samples/indie/crash_legend.wav' },
		1: { name: 'perc', url: '/samples/indie/perc_jungle.wav' },
		2: { name: 'open-hi', url: '/samples/indie/ohat_thick.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/indie/hat_crisp.wav', is: 'hat' },
		4: { name: 'clap', url: '/samples/indie/clap_hectic.wav' },
		5: { name: 'snare', url: '/samples/indie/snare_together.wav' },
		6: { name: 'tom', url: '/samples/indie/tom_clonk.wav' },
		7: { name: 'kick', url: '/samples/indie/kick_puffy.wav' }
	}
};

export const jungleKit: Kit = {
	name: 'Jungle',
	lines: {
		0: { name: 'crash', url: '/samples/jungle/indie_crash.wav' },
		1: { name: 'ride', url: '/samples/jungle/indie_cymbal.wav' },
		2: { name: 'open-hi', url: '/samples/jungle/indie_ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/jungle/indie_hat.wav', is: 'hat' },
		4: { name: 'snare-2', url: '/samples/jungle/indie_snare2.wav' },
		5: { name: 'snare', url: '/samples/jungle/indie_snare.wav' },
		6: { name: 'kick-2', url: '/samples/jungle/indie_kick2.wav' },
		7: { name: 'kick', url: '/samples/jungle/indie_kick.wav' }
	}
};

export const houseNewKit: Kit = {
	name: 'House (new)',
	lines: {
		0: { name: 'crash', url: '/samples/new/house/crash.wav' },
		1: { name: 'ride', url: '/samples/new/house/ride.wav' },
		2: { name: 'open-hi', url: '/samples/new/house/ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/new/house/hat.wav', is: 'hat' },
		4: { name: 'tom', url: '/samples/new/house/low-tom.wav' },
		5: { name: 'clap', url: '/samples/new/house/clap.wav' },
		6: { name: 'snare', url: '/samples/new/house/snare.wav' },
		7: { name: 'kick', url: '/samples/new/house/kick.wav' }
	}
};

export const lofiKit: Kit = {
	name: 'Lo-fi',
	lines: {
		0: { name: 'perc', url: '/samples/lo-fi/perc.wav' },
		1: { name: 'shaker', url: '/samples/lo-fi/shaker.wav' },
		2: { name: 'open-hi', url: '/samples/lo-fi/ohat.wav', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/lo-fi/hat.wav', is: 'hat' },
		4: { name: 'snap', url: '/samples/lo-fi/snap.wav' },
		5: { name: 'rim', url: '/samples/lo-fi/rim.wav' },
		6: { name: 'snare', url: '/samples/lo-fi/snare.wav' },
		7: { name: 'kick', url: '/samples/lo-fi/kick.wav' }
	}
};

export const kits = {
	std: stdKit,
	funk: funkKit,
	blues: bluesKit,
	trap: trapKit,
	eighties: eightiesKit,
	house: houseKit,
	techno: technoKit,
	indie: indieKit,
	jungle: jungleKit,
	lofi: lofiKit
} satisfies Record<string, Kit>;

import type { LineNumber } from './state';

export interface Kit {
	name: string;
	lines: {
		[line in LineNumber]: { name: string; url: string; is?: 'hat' | 'ohat' };
	};
}

export const stdKit: Kit = {
	name: 'Standard',
	lines: {
		0: { name: 'tom-2', url: '/samples/standard/tom2.mp3' },
		1: { name: 'tom', url: '/samples/standard/tom.mp3' },
		2: { name: 'open-hi', url: '/samples/standard/ohat.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/standard/hat.mp3', is: 'hat' },
		4: { name: 'clap', url: '/samples/standard/clap.mp3' },
		5: { name: 'snare', url: '/samples/standard/snare.mp3' },
		6: { name: 'kick-2', url: '/samples/standard/kick2.mp3' },
		7: { name: 'kick', url: '/samples/standard/kick.mp3' }
	}
};

export const funkKit: Kit = {
	name: 'Funk',
	lines: {
		0: { name: 'crash', url: '/samples/funk/rw_cymbal.mp3' },
		1: { name: 'tom', url: '/samples/funk/rw_perc_flam.mp3' },
		2: { name: 'open-hi', url: '/samples/funk/rw_ohat.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/funk/rw_hat.mp3', is: 'hat' },
		4: { name: 'clap', url: '/samples/funk/rw_clap.mp3' },
		5: { name: 'snare', url: '/samples/funk/rw_snare.mp3' },
		6: { name: 'kick-2', url: '/samples/funk/rw_kick2.mp3' },
		7: { name: 'kick', url: '/samples/funk/rw_kick.mp3' }
	}
};

export const bluesKit: Kit = {
	name: 'R&B',
	lines: {
		0: { name: 'ride', url: '/samples/blues/superich_ride.mp3' },
		1: { name: 'perc', url: '/samples/blues/superich_clav.mp3' },
		2: { name: 'open-hi', url: '/samples/blues/superich_ohat.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/blues/superich_hat.mp3', is: 'hat' },
		4: { name: 'snare-2', url: '/samples/blues/superich_tap.mp3' },
		5: { name: 'snare', url: '/samples/blues/superich_snare.mp3' },
		6: { name: 'kick-2', url: '/samples/blues/superich_kick2.mp3' },
		7: { name: 'kick', url: '/samples/blues/superich_kick.mp3' }
	}
};

export const trapKit: Kit = {
	name: 'Trap',
	lines: {
		0: { name: 'hat-3', url: '/samples/trap/ts_hat3.mp3' },
		1: { name: 'hat-2', url: '/samples/trap/ts_hat2.mp3' },
		2: { name: 'open-hi', url: '/samples/trap/ts_ohat.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/trap/ts_hat.mp3', is: 'hat' },
		4: { name: 'clap', url: '/samples/trap/ts_clap.mp3' },
		5: { name: 'snare', url: '/samples/trap/ts_snare.mp3' },
		6: { name: 'kick-2', url: '/samples/trap/ts_kick2.mp3' },
		7: { name: 'kick', url: '/samples/trap/ts_kick.mp3' }
	}
};

export const eightiesKit: Kit = {
	name: "'80s",
	lines: {
		0: { name: 'crash', url: '/samples/eighties/hs_crash.mp3' },
		1: { name: 'perc', url: '/samples/eighties/hs_perc.mp3' },
		2: { name: 'open-hi', url: '/samples/eighties/hs_ohat.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/eighties/hs_hat.mp3', is: 'hat' },
		4: { name: 'clap', url: '/samples/eighties/hs_clap.mp3' },
		5: { name: 'snare', url: '/samples/eighties/hs_snare.mp3' },
		6: { name: 'kick-2', url: '/samples/eighties/hs_kick2.mp3' },
		7: { name: 'kick', url: '/samples/eighties/hs_kick.mp3' }
	}
};

export const houseKit: Kit = {
	name: 'House',
	lines: {
		0: { name: 'chord-E', url: '/samples/house/paris_p_E.mp3' },
		1: { name: 'chord-Abm', url: '/samples/house/paris_p_Abm.mp3' },
		2: { name: 'open-hi', url: '/samples/house/paris_ohat.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/house/paris_hat.mp3', is: 'hat' },
		4: { name: 'clap', url: '/samples/house/paris_clap.mp3' },
		5: { name: 'snare', url: '/samples/house/snare.mp3' },
		6: { name: 'tom', url: '/samples/house/low-tom.mp3' },
		7: { name: 'kick', url: '/samples/house/paris_kick.mp3' }
	}
};

export const indieKit: Kit = {
	name: 'Indie',
	lines: {
		0: { name: 'crash', url: '/samples/indie/crash_legend.mp3' },
		1: { name: 'perc', url: '/samples/indie/perc_jungle.mp3' },
		2: { name: 'open-hi', url: '/samples/indie/ohat_thick.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/indie/hat_crisp.mp3', is: 'hat' },
		4: { name: 'clap', url: '/samples/indie/clap_hectic.mp3' },
		5: { name: 'snare', url: '/samples/indie/snare_together.mp3' },
		6: { name: 'tom', url: '/samples/indie/tom_clonk.mp3' },
		7: { name: 'kick', url: '/samples/indie/kick_puffy.mp3' }
	}
};

export const jungleKit: Kit = {
	name: 'Jungle',
	lines: {
		0: { name: 'crash', url: '/samples/jungle/indie_crash.mp3' },
		1: { name: 'ride', url: '/samples/jungle/indie_cymbal.mp3' },
		2: { name: 'open-hi', url: '/samples/jungle/indie_ohat.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/jungle/indie_hat.mp3', is: 'hat' },
		4: { name: 'snare-2', url: '/samples/jungle/indie_snare2.mp3' },
		5: { name: 'snare', url: '/samples/jungle/indie_snare.mp3' },
		6: { name: 'kick-2', url: '/samples/jungle/indie_kick2.mp3' },
		7: { name: 'kick', url: '/samples/jungle/indie_kick.mp3' }
	}
};

export const houseNewKit: Kit = {
	name: 'House (new)',
	lines: {
		0: { name: 'crash', url: '/samples/new/house/crash.mp3' },
		1: { name: 'ride', url: '/samples/new/house/ride.mp3' },
		2: { name: 'open-hi', url: '/samples/new/house/ohat.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/new/house/hat.mp3', is: 'hat' },
		4: { name: 'tom', url: '/samples/new/house/low-tom.mp3' },
		5: { name: 'clap', url: '/samples/new/house/clap.mp3' },
		6: { name: 'snare', url: '/samples/new/house/snare.mp3' },
		7: { name: 'kick', url: '/samples/new/house/kick.mp3' }
	}
};

export const lofiKit: Kit = {
	name: 'Lo-fi',
	lines: {
		0: { name: 'perc', url: '/samples/lo-fi/perc.mp3' },
		1: { name: 'shaker', url: '/samples/lo-fi/shaker.mp3' },
		2: { name: 'open-hi', url: '/samples/lo-fi/ohat.mp3', is: 'ohat' },
		3: { name: 'closed-hi', url: '/samples/lo-fi/hat.mp3', is: 'hat' },
		4: { name: 'snap', url: '/samples/lo-fi/snap.mp3' },
		5: { name: 'rim', url: '/samples/lo-fi/rim.mp3' },
		6: { name: 'snare', url: '/samples/lo-fi/snare.mp3' },
		7: { name: 'kick', url: '/samples/lo-fi/kick.mp3' }
	}
};

export const kits = {
	std: stdKit,
	funk: funkKit,
	blues: bluesKit,
	trap: trapKit,
	eighties: eightiesKit,
	house: houseKit,
	indie: indieKit,
	jungle: jungleKit,
	lofi: lofiKit
} satisfies Record<string, Kit>;

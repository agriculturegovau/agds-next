import { packs } from '../core';

export const switchTrackStyles = {
	sm: {
		borderWidth: packs.control.sm.borderWidth,
		height: packs.control.sm.height,
		thumbCheckedPos: '1.25rem',
		width: '2.75rem',
	},
	md: {
		borderWidth: packs.control.md.borderWidth,
		height: packs.control.md.height,
		thumbCheckedPos: '1.5rem',
		width: '3.5rem',
	},
} as const;

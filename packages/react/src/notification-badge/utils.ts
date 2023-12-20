import { actionPalette, boxPalette } from '../core';

export const badgeToneMap = {
	neutral: boxPalette.foregroundMuted,
	action: actionPalette.bg,
} as const;

export type BadgeTone = keyof typeof badgeToneMap;

import { actionPalette, boxPalette } from '../core';

export const badgeToneMap = {
	neutral: boxPalette.foregroundMuted,
	action: actionPalette.action,
} as const;

export type BadgeTone = keyof typeof badgeToneMap;

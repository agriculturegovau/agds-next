import { boxPalette } from '../core';

export const badgeToneMap = {
	neutral: boxPalette.foregroundMuted,
	action: boxPalette.foregroundAction,
} as const;

export type BadgeTone = keyof typeof badgeToneMap;

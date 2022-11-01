import { boxPalette } from '@ag.ds-next/core';

export const badgeToneMap = {
	neutral: boxPalette.foregroundMuted,
	action: boxPalette.foregroundAction,
} as const;

export type BadgeTone = keyof typeof badgeToneMap;

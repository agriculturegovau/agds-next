import { boxPalette } from '@ag.ds-next/core';

export const badgeToneMap = {
	neutral: boxPalette.border,
	action: boxPalette.foregroundAction,
} as const;

export type BadgeTone = keyof typeof badgeToneMap;

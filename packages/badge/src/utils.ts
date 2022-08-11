import { boxPalette } from '@ag.ds-next/core';

export const badgeToneMap = {
	inherit: 'currentColor',
	neutral: boxPalette.border,
	action: boxPalette.foregroundAction,
} as const;

export type BadgeTone = keyof typeof badgeToneMap;

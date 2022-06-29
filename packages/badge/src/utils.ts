import { boxPalette, globalPalette } from '@ag.ds-next/core';

export const badgeToneMap = {
	neutral: boxPalette.border,
	success: globalPalette.success,
	error: globalPalette.error,
	info: globalPalette.info,
	warning: globalPalette.warning,
} as const;

export type BadgeTone = keyof typeof badgeToneMap;

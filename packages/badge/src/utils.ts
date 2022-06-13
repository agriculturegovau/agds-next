import { globalPalette } from '@ag.ds-next/core';

export const badgeToneMap = {
	success: globalPalette.success,
	error: globalPalette.error,
	info: globalPalette.info,
	warning: globalPalette.warning,
} as const;

export type BadgeTone = keyof typeof badgeToneMap;

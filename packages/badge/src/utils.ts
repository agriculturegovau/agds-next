import { boxPalette, globalPalette } from '@ag.ds-next/core';

export const badgeToneMap = {
	action: boxPalette.foregroundAction,
	success: globalPalette.success,
	error: globalPalette.error,
	info: globalPalette.info,
	warning: globalPalette.warning,
} as const;

export type BadgeTone = keyof typeof badgeToneMap;

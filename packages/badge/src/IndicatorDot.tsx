import { Box } from '@ag.ds-next/box';
import { globalPalette } from '@ag.ds-next/core';

export type IndicatorDotTone = keyof typeof TONE_BG_MAP;

export type IndicatorDotProps = { tone?: IndicatorDotTone };

export const IndicatorDot = ({ tone = 'info' }: IndicatorDotProps) => {
	const backgroundColor = TONE_BG_MAP[tone];
	return (
		<Box css={{ width: 8, height: 8, borderRadius: 4, backgroundColor }} />
	);
};

const TONE_BG_MAP = {
	success: globalPalette.success,
	error: globalPalette.error,
	info: globalPalette.info,
	warning: globalPalette.warning,
} as const;

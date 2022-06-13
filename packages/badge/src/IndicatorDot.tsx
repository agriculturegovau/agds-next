import { Box } from '@ag.ds-next/box';
import { BadgeTone, badgeToneMap } from './utils';

export type IndicatorDotProps = {
	'aria-label'?: string;
	tone: BadgeTone;
};

export const IndicatorDot = ({
	'aria-label': ariaLabel,
	tone = 'info',
}: IndicatorDotProps) => {
	const backgroundColor = badgeToneMap[tone];
	return (
		<Box
			aria-label={ariaLabel}
			css={{ width: 8, height: 8, borderRadius: 4, backgroundColor }}
		/>
	);
};

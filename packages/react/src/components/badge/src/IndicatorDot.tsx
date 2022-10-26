import { Box } from '../../box/src';
import { BadgeTone, badgeToneMap } from './utils';

export type IndicatorDotProps = {
	/** The accessible label to read out in screen readers. */
	'aria-label'?: string;
	/** The colour tone to apply. */
	tone: BadgeTone;
};

export const IndicatorDot = ({
	'aria-label': ariaLabel,
	tone,
}: IndicatorDotProps) => {
	const backgroundColor = badgeToneMap[tone];
	return (
		<Box
			aria-label={ariaLabel}
			highContrastOutline
			css={{ width: 8, height: 8, borderRadius: 4, backgroundColor }}
		/>
	);
};

import { Box } from '../box';
import { boxPalette } from '../core';

export type IndicatorDotProps = {
	/** The accessible label to read out in screen readers. */
	'aria-label'?: string;
};

export const IndicatorDot = ({
	'aria-label': ariaLabel,
}: IndicatorDotProps) => {
	return (
		<Box
			aria-label={ariaLabel}
			css={{
				width: 8,
				height: 8,
				borderRadius: 4,
				backgroundColor: boxPalette.foregroundAction,
			}}
			highContrastOutline
		/>
	);
};

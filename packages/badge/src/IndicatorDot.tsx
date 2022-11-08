import { Box } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';

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
			highContrastOutline
			css={{
				width: 8,
				height: 8,
				borderRadius: 4,
				backgroundColor: boxPalette.foregroundAction,
			}}
		/>
	);
};

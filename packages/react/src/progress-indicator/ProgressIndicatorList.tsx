import { Box } from '../box';
import { tokens } from '../core';
import { type ProgressIndicatorListProps } from './types';

export function ProgressIndicatorList({
	children,
}: ProgressIndicatorListProps) {
	return (
		<Box
			as="ul"
			borderTop
			borderBottom
			css={{
				// Avoid double border on smaller devices
				[tokens.mediaQuery.max.sm]: {
					borderTopWidth: 0,
				},
			}}
		>
			{children}
		</Box>
	);
}

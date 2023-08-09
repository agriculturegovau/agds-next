import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { tokens } from '../core';

export type ProgressIndicatorListProps = PropsWithChildren<{}>;

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

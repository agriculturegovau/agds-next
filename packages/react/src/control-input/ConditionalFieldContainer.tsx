import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { mapSpacing } from '../core';

export type ConditionalFieldContainerProps = PropsWithChildren<{}>;

export function ConditionalFieldContainer({
	children,
}: ConditionalFieldContainerProps) {
	return (
		<Box
			borderLeft
			borderLeftWidth="xl"
			paddingLeft={1.5}
			css={{ marginLeft: mapSpacing(1) }}
		>
			{children}
		</Box>
	);
}

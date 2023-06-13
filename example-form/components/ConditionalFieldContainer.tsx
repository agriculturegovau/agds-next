import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { mapSpacing, tokens } from '@ag.ds-next/react/core';

export type ConditionalFieldContainerProps = PropsWithChildren<{}>;

export function ConditionalFieldContainer({
	children,
}: ConditionalFieldContainerProps) {
	return (
		<Box
			borderLeft
			borderLeftWidth="xl"
			paddingLeft={1.5}
			css={{
				marginLeft: `calc(${mapSpacing(1)} - ${tokens.borderWidth.xl / 2}px)`,
			}}
		>
			{children}
		</Box>
	);
}

import type { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';

export type ProgressIndicatorContainerProps = {
	children: ReactNode;
};

export const ProgressIndicatorContainer = ({
	children,
}: ProgressIndicatorContainerProps) => (
	<Box
		borderTop
		borderBottom
		css={{
			[tokens.mediaQuery.min.md]: {
				borderTop: 'none',
				borderBottom: 'none',
			},
		}}
	>
		{children}
	</Box>
);

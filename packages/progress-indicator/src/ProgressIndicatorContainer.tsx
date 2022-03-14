import type { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export type ProgressIndicatorContainerProps = {
	children: ReactNode;
};

export const ProgressIndicatorContainer = ({
	children,
}: ProgressIndicatorContainerProps) => (
	<Box borderTop borderBottom>
		{children}
	</Box>
);

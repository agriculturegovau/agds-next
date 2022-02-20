import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type ProgressIndicatorContainerProps = {
	children: ReactNode;
};

export const ProgressIndicatorContainer = ({
	children,
}: ProgressIndicatorContainerProps) => (
	<Stack as="ul" borderTop>
		{children}
	</Stack>
);

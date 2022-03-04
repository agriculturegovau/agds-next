import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type InpageNavItemContainerProps = {
	children: ReactNode;
};

export const InpageNavItemContainer = ({
	children,
}: InpageNavItemContainerProps) => (
	<Stack as="ul" gap={0.5}>
		{children}
	</Stack>
);

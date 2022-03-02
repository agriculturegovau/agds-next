import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type InpageNavItemContainerProps = {
	children: ReactNode;
};

export const InpageNavItemContainer = ({
	children,
}: InpageNavItemContainerProps) => {
	return (
		<Stack as="ul" gap={0.5} aria-label="In page">
			{children}
		</Stack>
	);
};

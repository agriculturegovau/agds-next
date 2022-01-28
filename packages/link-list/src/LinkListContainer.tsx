import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type LinkListContainerProps = {
	children: ReactNode;
	horizontal?: boolean;
};

export const LinkListContainer = ({
	children,
	horizontal,
}: LinkListContainerProps) => {
	return (
		<Stack
			as="ul"
			gap={horizontal ? 1 : 0.5}
			flexDirection={horizontal ? 'row' : 'column'}
			flexWrap="wrap"
		>
			{children}
		</Stack>
	);
};

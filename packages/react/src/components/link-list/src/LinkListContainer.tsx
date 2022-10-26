import type { PropsWithChildren } from 'react';
import { Stack } from '../../box/src';

export type LinkListContainerProps = PropsWithChildren<{
	horizontal?: boolean;
}>;

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

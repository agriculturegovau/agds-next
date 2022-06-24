import type { PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';

export type PaginationContainerProps = PropsWithChildren<{
	'aria-label': string;
}>;

export const PaginationContainer = ({
	children,
	'aria-label': ariaLabel,
}: PaginationContainerProps) => (
	<nav aria-label={ariaLabel}>
		<Flex
			as="ol"
			gap={0.25}
			alignItems="center"
			justifyContent="center"
			flexWrap="wrap"
		>
			{children}
		</Flex>
	</nav>
);

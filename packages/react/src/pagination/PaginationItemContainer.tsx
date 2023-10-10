import type { PropsWithChildren } from 'react';
import { Flex } from '../flex';

export type PaginationItemContainerProps = PropsWithChildren<{
	'aria-label': string;
}>;

export const PaginationItemContainer = ({
	children,
	'aria-label': ariaLabel,
}: PaginationItemContainerProps) => (
	<nav aria-label={ariaLabel}>
		<Flex as="ol" alignItems="center" justifyContent="center" flexWrap="wrap">
			{children}
		</Flex>
	</nav>
);

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
		<Flex alignItems="center" as="ol" flexWrap="wrap" justifyContent="center">
			{children}
		</Flex>
	</nav>
);

export type PaginationContainerProps = PropsWithChildren<{
	hasRightArea: boolean;
}>;

/** A Flex container, responsible for laying-out the main Pagination controls and the
 * secondary controls (items per page, item range text, etc.) */
export const PaginationContainer = ({
	children,
	hasRightArea,
}: PaginationContainerProps) => {
	return (
		<Flex
			alignItems="center"
			flexDirection={{
				xs: 'column',
				lg: 'row',
			}}
			flexWrap="wrap"
			gap={1}
			justifyContent={hasRightArea ? 'space-between' : 'center'}
		>
			{children}
		</Flex>
	);
};

export type PaginationSecondaryControlContainerProps = PropsWithChildren<{}>;

export const PaginationSecondaryControlContainer = ({
	children,
}: PaginationSecondaryControlContainerProps) => {
	return (
		<Flex
			alignItems="center"
			columnGap={2}
			flexDirection={{
				xs: 'column',
				lg: 'row',
			}}
			rowGap={1}
		>
			{children}
		</Flex>
	);
};

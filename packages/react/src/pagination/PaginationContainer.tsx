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
			gap={1}
			alignItems="center"
			justifyContent={hasRightArea ? 'space-between' : 'center'}
			flexDirection={{
				xs: 'column',
				lg: 'row',
			}}
			flexWrap="wrap"
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
			columnGap={2}
			rowGap={1}
			alignItems="center"
			flexDirection={{
				xs: 'column',
				lg: 'row',
			}}
		>
			{children}
		</Flex>
	);
};

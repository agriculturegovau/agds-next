import type { PropsWithChildren, ReactNode } from 'react';
import { Flex } from '../flex';

export type PaginationContainerProps = PropsWithChildren<{
	'aria-label': string;
}>;

export const PaginationContainer = ({
	children,
	'aria-label': ariaLabel,
}: PaginationContainerProps) => (
	<nav aria-label={ariaLabel}>
		<Flex as="ol" alignItems="center" justifyContent="center" flexWrap="wrap">
			{children}
		</Flex>
	</nav>
);

type PaginationOuterContainerProps = PropsWithChildren<{
	hasRightArea: boolean;
}>;

/** A Flex container, responsible for laying-out the main Pagination controls and the
 * secondary controls (items per page, item range text, etc.) */
export const PaginationOuterContainer = ({
	children,
	hasRightArea,
}: PaginationOuterContainerProps) => {
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

export const PaginationSecondaryControlContainer = ({
	children,
}: {
	children: ReactNode;
}) => {
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

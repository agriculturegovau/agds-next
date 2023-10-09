import { ReactNode } from 'react';
import { Flex } from '../flex';

type PaginationOuterContainerProps = {
	hasRightArea: boolean;
	children: ReactNode;
};

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

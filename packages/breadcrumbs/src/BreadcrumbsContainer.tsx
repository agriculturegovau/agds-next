import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';

export type BreadcrumbsContainerProps = {
	children: ReactNode;
};

export const BreadcrumbsContainer = ({
	children,
}: BreadcrumbsContainerProps) => {
	return (
		<nav aria-label="breadcrumb">
			<Flex as="ul" gap={0.5} alignItems="center">
				{children}
			</Flex>
		</nav>
	);
};

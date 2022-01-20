import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';

export type BreadcrumbsGroupProps = {
	children: ReactNode;
};

export const BreadcrumbsGroup = ({ children }: BreadcrumbsGroupProps) => {
	return (
		<nav aria-label="breadcrumb">
			<Flex as="ul" gap={0.5} alignItems="center">
				{children}
			</Flex>
		</nav>
	);
};

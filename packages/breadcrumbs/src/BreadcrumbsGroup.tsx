import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type BreadcrumbsGroupProps = {
	children: ReactNode;
};

export const BreadcrumbsGroup = ({ children }: BreadcrumbsGroupProps) => {
	return (
		<nav aria-label="breadcrumb">
			<Stack as="ul" gap={0.5} flexDirection="row" alignItems="center">
				{children}
			</Stack>
		</nav>
	);
};

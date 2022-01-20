import type { ReactNode } from 'react';
import { Stack, StackProps } from '@ag.ds-next/box';

export type BreadcrumbsGroupProps = StackProps & {
	children: ReactNode;
};

export const BreadcrumbsGroup = ({
	children,
	...props
}: BreadcrumbsGroupProps) => {
	return (
		<nav aria-label="breadcrumb">
			<Stack
				as="ul"
				gap={0.5}
				flexDirection="row"
				alignItems="center"
				{...props}
			>
				{children}
			</Stack>
		</nav>
	);
};

import type { PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';

export type BreadcrumbsContainerProps = PropsWithChildren<{
	'aria-label': string;
}>;

export const BreadcrumbsContainer = ({
	children,
	'aria-label': ariaLabel,
}: BreadcrumbsContainerProps) => (
	<nav aria-label={ariaLabel}>
		<Flex as="ol" gap={0.5} alignItems="center" flexWrap="wrap">
			{children}
		</Flex>
	</nav>
);

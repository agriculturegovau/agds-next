import type { PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';

export type BreadcrumbsContainerProps = PropsWithChildren<{
	'aria-label': string;
	isExpanded?: boolean;
}>;

export const BreadcrumbsContainer = ({
	children,
	'aria-label': ariaLabel,
	isExpanded,
}: BreadcrumbsContainerProps) => (
	<nav aria-label={ariaLabel}>
		<Flex
			as="ol"
			gap={0.5}
			alignItems="center"
			flexWrap="wrap"
			css={{
				// Hide the divider in the first list item
				'li:first-of-type > svg': {
					display: 'none',
				},
				...(!isExpanded && {
					// Hide the toggle button on desktops
					[tokens.mediaQuery.min.md]: {
						'li:nth-of-type(2)': {
							display: 'none',
						},
					},
					// Hide the appropriate list items on mobile
					[tokens.mediaQuery.max.sm]: {
						'li:not(:nth-of-type(-n+2)):not(:last-of-type)': {
							display: isExpanded ? undefined : 'none',
						},
					},
				}),
			}}
		>
			{children}
		</Flex>
	</nav>
);

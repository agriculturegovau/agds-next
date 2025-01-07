import type { PropsWithChildren } from 'react';
import { Flex } from '../flex';
import { tokens } from '../core';

export type BreadcrumbsContainerProps = PropsWithChildren<{
	'aria-label': string;
	isExpandable?: boolean;
	isExpanded?: boolean;
}>;

export const BreadcrumbsContainer = ({
	children,
	'aria-label': ariaLabel,
	isExpandable,
	isExpanded,
}: BreadcrumbsContainerProps) => (
	<nav aria-label={ariaLabel}>
		<Flex
			alignItems="center"
			as="ol"
			css={{
				// Hide the divider in the first list item
				'li:first-of-type > svg': {
					display: 'none',
				},
				...(isExpandable &&
					!isExpanded && {
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
			flexWrap="wrap"
			gap={0.5}
		>
			{children}
		</Flex>
	</nav>
);

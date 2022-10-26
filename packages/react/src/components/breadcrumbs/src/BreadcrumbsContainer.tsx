import type { PropsWithChildren } from 'react';
import { Flex } from '../../box/src';
import { tokens } from '../../core/src';

export type BreadcrumbsContainerProps = PropsWithChildren<{
	'aria-label': string;
}>;

export const BreadcrumbsContainer = ({
	children,
	'aria-label': ariaLabel,
}: BreadcrumbsContainerProps) => (
	<nav aria-label={ariaLabel}>
		<Flex
			as="ol"
			gap={0.5}
			alignItems="center"
			flexWrap="wrap"
			css={{
				// In desktop, hide the `BreadcrumbsDivider` from the first item
				[tokens.mediaQuery.min.sm]: {
					'li:first-of-type > svg': {
						display: 'none',
					},
				},
				[tokens.mediaQuery.max.xs]: {
					// In mobile, hide all items except the second last item
					'li:not(:nth-last-of-type(2))': {
						display: 'none',
					},
					// In mobile, rotate the `BreadcrumbsDivider` icon
					'li > svg': {
						transform: 'rotate(180deg)',
					},
				},
			}}
		>
			{children}
		</Flex>
	</nav>
);

import { forwardRef, PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { InfoIcon, ChevronDownIcon } from '@ag.ds-next/icon';

export type DetailProps = PropsWithChildren<{
	/** The label that will be present in the trigger */
	label?: string;
}>;

export const Detail = forwardRef<HTMLDetailsElement, DetailProps>(
	function Detail({ children, label = 'Details' }, ref) {
		return (
			<details
				ref={ref}
				css={{
					'&[open] summary svg:last-of-type': {
						transform: 'rotate(180deg)',
					},
					'summary::marker, summary::-webkit-details-marker': {
						display: 'none',
					},
				}}
			>
				<Flex
					as="summary"
					gap={0.5}
					link
					focus
					alignItems="center"
					fontWeight="bold"
					paddingY={0.5}
					rounded
				>
					<InfoIcon size="md" aria-hidden="true" />
					{label}
					<ChevronDownIcon weight="bold" size="sm" />
				</Flex>

				<Box
					background="shade"
					padding={1.5}
					borderLeft
					borderLeftWidth="xl"
					highContrastOutline
				>
					{children}
				</Box>
			</details>
		);
	}
);

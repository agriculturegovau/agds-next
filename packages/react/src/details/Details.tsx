import { forwardRef, PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { InfoIcon, ChevronDownIcon } from '../icon';

export type DetailsProps = PropsWithChildren<{
	/** If true, the InfoIcon will be shown. */
	iconBefore?: boolean;
	/** The label that will be present in the trigger. */
	label: string;
}>;

export const Details = forwardRef<HTMLDetailsElement, DetailsProps>(
	function Details({ children, iconBefore = false, label = 'Details' }, ref) {
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
					{iconBefore && <InfoIcon weight="regular" />}
					{label}
					<ChevronDownIcon weight="bold" />
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

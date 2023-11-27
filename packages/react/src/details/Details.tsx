import { forwardRef, PropsWithChildren } from 'react';
import { Box } from '../box';
import { mapSpacing, tokens } from '../core';
import { Flex } from '../flex';
import { InfoIcon, ChevronDownIcon } from '../icon';
import { Text } from '../text';

export type DetailsProps = PropsWithChildren<{
	/** If the Details component is placed on a page with `bodyAlt` background, set this prop to `true`. */
	onBodyAlt?: boolean;
	/** If true, the InfoIcon will be shown. */
	iconBefore?: boolean;
	/** The label that will be present in the trigger. */
	label: string;
}>;

export const Details = forwardRef<HTMLDetailsElement, DetailsProps>(
	function Details(
		{ children, onBodyAlt = false, iconBefore = false, label = 'Details' },
		ref
	) {
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
					inline
					link
					focus
					alignItems="center"
					paddingY={0.5}
					rounded
				>
					{iconBefore && (
						<InfoIcon
							weight="regular"
							size="md"
							css={{ marginRight: mapSpacing(0.5), flexShrink: 0 }}
						/>
					)}
					<Text
						color="inherit"
						fontWeight="bold"
						maxWidth={tokens.maxWidth.bodyText}
					>
						{label}
					</Text>
					<ChevronDownIcon
						weight="bold"
						css={{ marginLeft: mapSpacing(0.25), flexShrink: 0 }}
					/>
				</Flex>
				<Box
					background={onBodyAlt ? 'shadeAlt' : 'shade'}
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

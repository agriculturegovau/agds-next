import { forwardRef, PropsWithChildren } from 'react';
import { Box } from '../box';
import { mapSpacing } from '../core';
import { Flex } from '../flex';
import { InfoIcon, ChevronDownIcon } from '../icon';

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
					css={{
						// iOS VoiceOver does not announce the expanded state of `summary` elements when they are inline.
						// Here we're using `fit-content` to simulate the visual effect of an inline element while maintaining the correct announcement.
						width: 'fit-content',
					}}
					link
					focusRingFor="keyboard"
					alignItems="center"
					fontWeight="bold"
					paddingY={0.5}
					rounded
				>
					{iconBefore && (
						<InfoIcon
							aria-hidden={false}
							aria-label="Information."
							css={{ marginRight: mapSpacing(0.5) }}
							size="md"
							weight="regular"
						/>
					)}
					{label}
					<ChevronDownIcon
						weight="bold"
						css={{ marginLeft: mapSpacing(0.25) }}
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

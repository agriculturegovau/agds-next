import { forwardRef, type PropsWithChildren } from 'react';
import { Box } from '../box';
import { mapSpacing } from '../core';
import { Flex } from '../flex';
import { InfoIcon, ChevronDownIcon } from '../icon';
import { scaleIconOnHover } from '../icon/Icon';

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
		const scaleIconCSS = scaleIconOnHover();
		return (
			<details
				css={{
					'summary svg:last-of-type': {
						transition: scaleIconCSS.transition,
					},
					'summary:hover svg:last-of-type': {
						transform: scaleIconCSS.transform,
					},
					'&[open] summary svg:last-of-type': {
						transform: 'rotate(180deg)',
					},
					'&[open] summary:hover svg:last-of-type': {
						transform: `rotate(180deg) ${scaleIconCSS.transform}`,
					},
					'summary::marker, summary::-webkit-details-marker': {
						display: 'none',
					},
				}}
				ref={ref}
			>
				<Flex
					alignItems="center"
					as="summary"
					css={{
						// iOS VoiceOver does not announce the expanded state of `summary` elements when they are inline.
						// Here we're using `fit-content` to simulate the visual effect of an inline element while maintaining the correct announcement.
						width: 'fit-content',
					}}
					focusRingFor="keyboard"
					fontWeight="bold"
					link
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
						css={{ marginLeft: mapSpacing(0.25) }}
						weight="bold"
					/>
				</Flex>
				<Box
					background={onBodyAlt ? 'shadeAlt' : 'shade'}
					borderLeft
					borderLeftWidth="xl"
					highContrastOutline
					padding={1.5}
				>
					{children}
				</Box>
			</details>
		);
	}
);

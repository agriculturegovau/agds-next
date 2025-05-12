import { PropsWithChildren, ReactNode, useRef } from 'react';
import { BaseButton, scaleIconOnHover } from '../button';
import { Box, type BoxProps } from '../box';
import { packs, tokens, useToggleState, useTransitionHeight } from '../core';
import { ChevronDownIcon } from '../icon';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import {
	CollapsingSideBarBackground,
	collapsingSideBarHoverProp,
	collapsingSideBarHoverVar,
	hoverColorMap,
	useCollapsingSideBarIds,
} from './utils';

export type CollapsingSideBarProps = PropsWithChildren<{
	/* The specific label of the root element, otherwise falls back to title + subtitle. */
	ariaLabel?: string;
	/** The HTML element to render the CollapsingSideBar as. */
	as?: CollapsingSideBarContainerElementType;
	/** If CollapsingSideBar is placed on 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: CollapsingSideBarBackground;
	/** A custom element to use instead of title and subTitle. To make this accessible, it should render as an h2. */
	customTitleElement?: ReactNode;
	/** The gap between the small title/subTitle and children. */
	gap?: BoxProps['gap'];
	/** The subTitle of the CollapsingSideBar. */
	subTitle?: string;
	/** The title of the CollapsingSideBar. Still required even when using customTitleElement. */
	title: string;
}>;

export function CollapsingSideBar({
	ariaLabel,
	as = 'section',
	background = 'body',
	children,
	customTitleElement,
	gap = { xs: 0, md: 1 },
	subTitle,
	title,
}: CollapsingSideBarProps) {
	const { bodyId, headingId } = useCollapsingSideBarIds();
	const ref = useRef<HTMLDivElement>(null);
	const [isOpen, onToggle] = useToggleState(false, true);
	const [transitionHeightProp, transitionHeightStyles] =
		useTransitionHeight(isOpen);
	const scaleIconCSS = scaleIconOnHover();

	return (
		<Stack
			aria-label={ariaLabel}
			aria-labelledby={ariaLabel ? undefined : headingId}
			as={as}
			background={background}
			css={{
				[collapsingSideBarHoverProp]: hoverColorMap[background],
			}}
			gap={gap}
		>
			<Box css={{ position: 'relative' }}>
				<Stack
					css={{
						// Make the accesible heading appear the same size as the button for a screen reader's virtual cursor
						inset: 0,
						position: 'absolute',
						[tokens.mediaQuery.min.md]: {
							position: 'static',
						},
					}}
					gap={0.5}
					id={headingId}
					paddingX={customTitleElement ? undefined : { xs: 0.75, md: 0 }}
					paddingY={customTitleElement ? undefined : { xs: 1, md: 0 }}
				>
					{customTitleElement || (
						<>
							<Text
								as="h2"
								color="text"
								fontSize="md"
								fontWeight="bold"
								lineHeight="heading"
							>
								{title}
							</Text>
							{subTitle && (
								<Text color="muted" fontSize="xs">
									{subTitle}
								</Text>
							)}
						</>
					)}
				</Stack>
				<Box
					aria-controls={bodyId}
					aria-expanded={isOpen}
					aria-label={title}
					as={BaseButton}
					background={background}
					borderBottom
					css={{
						position: 'relative',
						':hover': {
							background: collapsingSideBarHoverVar,
						},
						[tokens.mediaQuery.min.md]: {
							display: 'none',
						},
						'& svg': {
							transition: scaleIconCSS.transition,
							transform: `rotate(${isOpen ? 180 : 0}deg)`,
						},
						':hover svg': {
							transition: scaleIconCSS.transition,
							transform: `rotate(${isOpen ? 180 : 0}deg) ${
								scaleIconCSS.transform
							}`,
						},
					}}
					focusRingFor="keyboard"
					onClick={onToggle}
					width="100%"
				>
					<Flex
						alignItems="center"
						as="span"
						gap={1}
						justifyContent="space-between"
						paddingX={0.75}
						paddingY={1}
					>
						<Stack as="span" gap={0.5}>
							<Text
								color="action"
								css={packs.underline}
								fontSize="md"
								fontWeight="bold"
								lineHeight="heading"
							>
								{title}
							</Text>
							{subTitle && (
								<Text color="muted" fontSize="xs">
									{subTitle}
								</Text>
							)}
						</Stack>
						<ChevronDownIcon weight="bold" />
					</Flex>
				</Box>
			</Box>
			<div
				css={[
					transitionHeightStyles,
					{
						// Overwrite the animated height for tablet/desktop sizes.
						[tokens.mediaQuery.min.md]: {
							display: 'block !important',
							height: 'auto !important',
							overflow: 'unset',
						},
					},
				]}
				id={bodyId}
				{...transitionHeightProp}
			>
				<Box ref={ref}>{children}</Box>
			</div>
		</Stack>
	);
}

/** The HTML element to render the CollapsingSideBar as. */
type CollapsingSideBarContainerElementType = 'aside' | 'nav' | 'section';

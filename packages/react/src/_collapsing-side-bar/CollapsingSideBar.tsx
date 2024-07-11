import { PropsWithChildren, ReactNode, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import {
	packs,
	tokens,
	usePrefersReducedMotion,
	useToggleState,
} from '@ag.ds-next/react/core';
import { Box, type BoxProps } from '@ag.ds-next/react/box';
import { BaseButton } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/flex';
import { ChevronDownIcon } from '@ag.ds-next/react/icon';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import {
	CollapsingSideBarBackground,
	collapsingSideBarHoverProp,
	collapsingSideBarHoverVar,
	hoverColorMap,
	useCollapsingSideBarIds,
} from './utils';

export type CollapsingSideBarProps = PropsWithChildren<{
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

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { display: 'none', height: 0 },
		to: async (next) => {
			// Show the element so its height can be animated
			if (isOpen) await next({ display: 'block', overflow: 'hidden' });
			// Animate the elements height
			await next({
				overflow: 'hidden',
				height: isOpen ? ref.current?.offsetHeight : 0,
				immediate: prefersReducedMotion,
			});
			// Animation end state
			await next(
				isOpen
					? { height: 'auto', overflow: 'initial' }
					: { display: 'none', overflow: 'initial' }
			);
		},
	});

	return (
		<Stack
			as={as}
			aria-labelledby={headingId}
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
					paddingX={customTitleElement ? undefined : { xs: 0.75, md: 0 }}
					paddingY={customTitleElement ? undefined : { xs: 1, md: 0 }}
					id={headingId}
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
					aria-describedby={headingId}
					aria-expanded={isOpen}
					aria-label={`Open ${title}`}
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
						<ChevronDownIcon
							css={{
								transition: `transform ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
								transform: `rotate(${isOpen ? 180 : 0}deg)`,
							}}
							weight="bold"
						/>
					</Flex>
				</Box>
			</Box>
			<animated.div
				id={bodyId}
				css={{
					// Overwrite the animated height for tablet/desktop sizes.
					[tokens.mediaQuery.min.md]: {
						display: 'block !important',
						height: 'auto !important',
						overflow: 'unset',
					},
				}}
				style={animatedHeight}
			>
				<Box ref={ref}>{children}</Box>
			</animated.div>
		</Stack>
	);
}

/** The HTML element to render the CollapsingSideBar as. */
type CollapsingSideBarContainerElementType = 'aside' | 'nav' | 'section';

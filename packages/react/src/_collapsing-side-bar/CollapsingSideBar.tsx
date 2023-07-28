import { PropsWithChildren, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import {
	tokens,
	usePrefersReducedMotion,
	useToggleState,
	useWindowSize,
} from '@ag.ds-next/react/core';
import { backgroundColorMap, Box } from '@ag.ds-next/react/box';
import { mapResponsiveProp, mq } from '@ag.ds-next/react/core';
import { BaseButton } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/flex';
import { ChevronDownIcon } from '@ag.ds-next/react/icon';
import {
	hoverColorMap,
	SideBarBackground,
	sideBarLocalPalette,
	sideBarLocalPaletteVars,
	useSideBarIds,
} from './utils';

export type CollapsingSideBarProps = PropsWithChildren<{
	/** The HTML element to render the CollapsingSideBar as. */
	as?: CollapsingSideBarContainerElementType;
	/** If CollapsingSideBar is placed on 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: SideBarBackground;
	/** Used as the title of the expand/collapse trigger on smaller screen sizes. */
	collapseButtonLabel: string;
}>;

export function CollapsingSideBar({
	as = 'div',
	background = 'body',
	children,
	collapseButtonLabel,
}: CollapsingSideBarProps) {
	const { bodyId, buttonId } = useSideBarIds();
	const ref = useRef<HTMLDivElement>(null);
	const [isOpen, onToggle] = useToggleState(false, true);

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { display: 'none', height: 0 },
		to: async (next) => {
			// Show the element so it's height can be animated
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

	const { windowWidth } = useWindowSize();
	const isMobile = (windowWidth || 0) <= tokens.breakpoint.lg - 1;

	return (
		<CollapsingSideBarContainer as={as} background={background}>
			<SideBarCollapseButton
				isOpen={isOpen}
				onClick={onToggle}
				ariaControls={bodyId}
				id={buttonId}
			>
				{collapseButtonLabel}
			</SideBarCollapseButton>
			<animated.div
				id={bodyId}
				// As this component looks similar to an accordion in smaller screen sizes, we need to conditionally add some aria attributes
				{...(isMobile && { role: 'region', 'aria-labelledby': buttonId })}
				style={animatedHeight}
				css={{
					// Overwrite the animated height for tablet/desktop sizes.
					[tokens.mediaQuery.min.md]: {
						overflow: 'unset',
						display: 'block !important',
						height: 'auto !important',
					},
				}}
			>
				<Box ref={ref} borderBottom={{ xs: true, md: false }}>
					{children}
				</Box>
			</animated.div>
		</CollapsingSideBarContainer>
	);
}

/** The HTML element to render the CollapsingSideBar as. */
type CollapsingSideBarContainerElementType =
	| 'aside'
	| 'nav'
	| 'section'
	| 'div';

type CollapsingSideBarContainerProps = PropsWithChildren<{
	as: CollapsingSideBarContainerElementType;
	background: SideBarBackground;
}>;

const CollapsingSideBarContainer = ({
	as,
	background,
	children,
}: CollapsingSideBarContainerProps) => {
	const hoverColor = hoverColorMap[background];
	return (
		<Box
			as={as}
			background={background}
			css={mq({
				[sideBarLocalPaletteVars.hover]: mapResponsiveProp(
					hoverColor,
					(t) => backgroundColorMap[t]
				),
			})}
		>
			{children}
		</Box>
	);
};

type SideBarCollapseButtonProps = PropsWithChildren<{
	ariaControls: string;
	id: string;
	isOpen: boolean;
	onClick: () => void;
}>;

/** Button that toggles the CollapsingSideBar. */
export const SideBarCollapseButton = ({
	ariaControls,
	children,
	id,
	isOpen,
	onClick,
}: SideBarCollapseButtonProps) => {
	return (
		<Flex
			as={BaseButton}
			aria-controls={ariaControls}
			aria-expanded={isOpen}
			onClick={onClick}
			id={id}
			color="action"
			fontSize="md"
			lineHeight="heading"
			fontWeight="bold"
			paddingY={1}
			paddingX={{
				xs: 0.75,
				md: 0,
			}}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			link
			focus
			borderTop
			borderBottom
			css={{
				'&:hover': {
					background: sideBarLocalPalette.hover,
				},
				[tokens.mediaQuery.min.md]: {
					display: 'none',
				},
			}}
		>
			{children}
			<ChevronDownIcon
				size="sm"
				weight="bold"
				css={{
					transition: `transform ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
					transform: `rotate(${isOpen ? 180 : 0}deg)`,
				}}
			/>
		</Flex>
	);
};

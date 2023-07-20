import { PropsWithChildren, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box } from '@ag.ds-next/react/box';
import {
	tokens,
	usePrefersReducedMotion,
	useToggleState,
	useWindowSize,
} from '@ag.ds-next/react/core';
import { SideBarBackground, useSideBarIds } from './utils';
import { SideBarCollapseButton } from './SideBarCollapseButton';
import {
	SideBarContainer,
	SideBarContainerElementType,
} from './SideBarContainer';

export type SideBarProps = PropsWithChildren<{
	/** The HTML element to render the SideBar as. */
	as?: SideBarContainerElementType;
	/** If SideBar is placed on 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: SideBarBackground;
	/** Used as the title of the expand/collapse trigger on smaller screen sizes. */
	collapseButtonLabel: string;
}>;

export function SideBar({
	as = 'div',
	background = 'body',
	children,
	collapseButtonLabel,
}: SideBarProps) {
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
		<SideBarContainer as={as} background={background}>
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
		</SideBarContainer>
	);
}

import { ReactNode, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import {
	boxPalette,
	tokens,
	usePrefersReducedMotion,
	useToggleState,
	useWindowSize,
} from '@ag.ds-next/react/core';
import { useSideNavIds } from '@ag.ds-next/react/src/side-nav/utils';
import { ChevronDownIcon } from '@ag.ds-next/react/icon';
import { BaseButton } from '@ag.ds-next/react/button';
import { ContentBleed } from '@ag.ds-next/react/content';

export type SideBarProps = {
	action?: ReactNode;
	children: ReactNode;
	title: string;
	collapseButtonLabel: string;
};

export function SideBar({
	action,
	children,
	title,
	collapseButtonLabel,
}: SideBarProps) {
	const { bodyId, buttonId, navId, titleId } = useSideNavIds();
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
		<ContentBleed visible={{ md: false }}>
			<Box as="aside">
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
					<Stack
						gap={1}
						ref={ref}
						as="nav"
						aria-labelledby={titleId}
						id={navId}
						fontFamily="body"
						fontSize="sm"
						lineHeight="default"
						borderBottom={{
							xs: true,
							md: false,
						}}
						background={{
							xs: 'shade',
							md: 'body',
						}}
						padding={{
							xs: 1,
							md: 0,
						}}
					>
						<SideBarTitle id={titleId} title={title} action={action} />
						{children}
					</Stack>
				</animated.div>
			</Box>
		</ContentBleed>
	);
}

export type SideBarTitleProps = PropsWithChildren<{
	id: string;
	title: string;
	action?: ReactNode;
}>;

/** Title of the SideBar nav */
function SideBarTitle({ title, id, action }: SideBarTitleProps) {
	return (
		<Flex
			borderBottom
			paddingY={1}
			justifyContent="space-between"
			alignItems="center"
			display={{ xs: 'none', md: 'flex' }}
			gap={1}
		>
			<Box as="h2" id={id} color="text" fontSize="lg" lineHeight="heading">
				{title}
			</Box>
			{action}
		</Flex>
	);
}

type SideBarCollapseButtonProps = PropsWithChildren<{
	ariaControls: string;
	id: string;
	isOpen: boolean;
	onClick: () => void;
}>;

/** Button that toggles the SideBar. */
const SideBarCollapseButton = ({
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
					background: boxPalette.backgroundShade,
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

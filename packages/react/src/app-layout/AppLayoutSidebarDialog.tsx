import {
	Fragment,
	MouseEventHandler,
	PropsWithChildren,
	useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { useTransition, animated, SpringValue } from '@react-spring/web';
import { Global } from '@emotion/react';
import FocusLock from 'react-focus-lock';
import {
	boxPalette,
	canUseDOM,
	tokens,
	type BoxPalette,
	type ResponsiveProp,
	useAriaModalPolyfill,
	usePrefersReducedMotion,
} from '../core';
import { Box } from '../box';
import { Flex } from '../flex';
import { CloseIcon } from '../icon';
import { VisuallyHidden } from '../a11y';
import { BaseButton } from '../button';
import { useAppLayoutContext } from './AppLayoutContext';
import {
	APP_LAYOUT_DESKTOP_BREAKPOINT,
	APP_LAYOUT_SIDEBAR_WIDTH,
} from './utils';

export type AppLayoutSidebarDialogProps = PropsWithChildren<{
	palette?: ResponsiveProp<BoxPalette>;
}>;

export function AppLayoutSidebarDialog({
	children,
	palette,
}: AppLayoutSidebarDialogProps) {
	const { isMobileMenuOpen, closeMobileMenu } = useAppLayoutContext();

	// Polyfill usage of `aria-modal`
	const { modalContainerRef } = useAriaModalPolyfill(isMobileMenuOpen);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				closeMobileMenu();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [closeMobileMenu]);

	// Animation styles
	const prefersReducedMotion = usePrefersReducedMotion();
	const dialogTransitions = useTransition([isMobileMenuOpen], {
		from: { translateX: '-100%', opacity: 0 },
		enter: { translateX: '0%', opacity: 1 },
		leave: { translateX: '-100%', opacity: 0 },
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	});

	// Since react portals can not be rendered on the server and this component is always closed by default
	// This component doesn't need to be server side rendered
	if (!canUseDOM()) return null;

	return createPortal(
		<Fragment>
			{isMobileMenuOpen && <LockScroll />}
			{dialogTransitions(({ translateX, opacity }, item) =>
				item ? (
					<Box ref={modalContainerRef}>
						<Overlay onClick={closeMobileMenu} style={{ opacity }} />
						<FocusLock returnFocus>
							<AnimatedBox
								aria-label="Menu"
								aria-modal="true"
								background="shade"
								css={{
									position: 'fixed',
									zIndex: tokens.zIndex.dialog,
									top: 0,
									left: 0,
									bottom: 0,
									overflowY: 'auto',
								}}
								display={{ [APP_LAYOUT_DESKTOP_BREAKPOINT]: 'none' }}
								palette={palette}
								role="dialog"
								style={{ translateX }}
								width={APP_LAYOUT_SIDEBAR_WIDTH}
							>
								<CloseMenuButton onClick={closeMobileMenu} />
								{children}
							</AnimatedBox>
						</FocusLock>
					</Box>
				) : null
			)}
		</Fragment>,
		document.body
	);
}

const AnimatedBox = animated(Box);

function LockScroll() {
	return (
		<Global
			styles={{
				// Only show in mobile devices
				// Without this, `AppLayoutSidebar` stories would not correctly
				body: { overflow: 'hidden' },
				[tokens.mediaQuery.min[APP_LAYOUT_DESKTOP_BREAKPOINT]]: {
					body: { overflow: 'unset' },
				},
			}}
		/>
	);
}

function Overlay({
	onClick,
	style,
}: {
	onClick: MouseEventHandler<HTMLDivElement>;
	style: { opacity: SpringValue<number> };
}) {
	return (
		<animated.div
			css={{
				// Only show in mobile devices
				// Without this, `AppLayoutSidebar` stories would not correctly
				display: 'block',
				position: 'fixed',
				inset: 0,
				backgroundColor: boxPalette.overlay,
				zIndex: tokens.zIndex.overlay,
				[tokens.mediaQuery.min[APP_LAYOUT_DESKTOP_BREAKPOINT]]: {
					display: 'none',
				},
			}}
			onClick={onClick}
			style={style}
		/>
	);
}

function CloseMenuButton({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<Flex
			alignItems="center"
			borderBottom
			borderColor="muted"
			flexShrink={0}
			paddingLeft={1}
		>
			<Flex
				alignItems="center"
				as={BaseButton}
				color="action"
				flexDirection="column"
				focusRingFor="keyboard"
				fontSize="xs"
				gap={0.5}
				onClick={onClick}
				padding={1}
			>
				<CloseIcon />
				<span aria-hidden="true">Close</span>
				<VisuallyHidden>Close menu</VisuallyHidden>
			</Flex>
		</Flex>
	);
}

import {
	Fragment,
	MouseEventHandler,
	PropsWithChildren,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useTransition, animated, SpringValue } from '@react-spring/web';
import { Global } from '@emotion/react';
import FocusLock from 'react-focus-lock';
import {
	tokens,
	usePrefersReducedMotion,
	canUseDOM,
	useAriaModalPolyfill,
	boxPalette,
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

export type AppLayoutSidebarDialogProps = PropsWithChildren<{}>;

export function AppLayoutSidebarDialog({
	children,
}: AppLayoutSidebarDialogProps) {
	const { isMobileMenuOpen, closeMobileMenu } = useAppLayoutContext();

	// When true, the focus will be returned to the menu button.
	// Otherwise, focus will be returned to the body, which should happen when the user presses a nav link.
	const [returnFocusToTrigger, setReturnFocusToTrigger] = useState(false);

	const closeMobileMenuAndFocusMenuButton = useCallback(() => {
		setReturnFocusToTrigger(true);
		closeMobileMenu();
	}, [closeMobileMenu]);

	// Polyfill usage of `aria-modal`
	const { modalContainerRef } = useAriaModalPolyfill(isMobileMenuOpen);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				closeMobileMenuAndFocusMenuButton();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [closeMobileMenuAndFocusMenuButton]);

	// Animation styles
	const [finishedTransition, setFinishedTransition] = useState(false);

	const prefersReducedMotion = usePrefersReducedMotion();
	const dialogTransitions = useTransition([isMobileMenuOpen], {
		from: { translateX: '-100%', opacity: 0 },
		enter: {
			translateX: '0%',
			opacity: 1,
			onRest: () => {
				if (isMobileMenuOpen) setFinishedTransition(false);
			},
		},
		leave: {
			translateX: '-100%',
			opacity: 0,
			onRest: () => {
				if (isMobileMenuOpen) return;
				setFinishedTransition(true);
			},
		},
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	});

	// Reset the focus to false when the transition is finished
	useEffect(() => {
		setReturnFocusToTrigger(false);
	}, [finishedTransition]);

	// Since react portals can not be rendered on the server and this component is always closed by default
	// This component doesn't need to be server side rendered
	if (!canUseDOM()) return null;

	return createPortal(
		<Fragment>
			{isMobileMenuOpen && <LockScroll />}
			{dialogTransitions(({ translateX, opacity }, item) =>
				item ? (
					<div ref={modalContainerRef}>
						<Overlay
							onClick={closeMobileMenuAndFocusMenuButton}
							style={{ opacity }}
						/>
						<FocusLock returnFocus={returnFocusToTrigger}>
							<AnimatedBox
								display={{ [APP_LAYOUT_DESKTOP_BREAKPOINT]: 'none' }}
								role="dialog"
								aria-label="Menu"
								aria-modal="true"
								background="shade"
								width={APP_LAYOUT_SIDEBAR_WIDTH}
								css={{
									position: 'fixed',
									zIndex: tokens.zIndex.dialog,
									top: 0,
									left: 0,
									bottom: 0,
									overflowY: 'auto',
								}}
								style={{ translateX }}
							>
								<CloseMenuButton onClick={closeMobileMenuAndFocusMenuButton} />
								{children}
							</AnimatedBox>
						</FocusLock>
					</div>
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
			paddingLeft={1}
			flexShrink={0}
		>
			<Flex
				as={BaseButton}
				onClick={onClick}
				flexDirection="column"
				alignItems="center"
				gap={0.5}
				color="action"
				fontSize="xs"
				padding={1}
				focus
			>
				<CloseIcon />
				<span aria-hidden="true">Close</span>
				<VisuallyHidden>Close menu</VisuallyHidden>
			</Flex>
		</Flex>
	);
}

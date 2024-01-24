import {
	Fragment,
	MouseEventHandler,
	PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
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
	const { isMobileMenuOpen, closeMobileMenu, mobileMenuOpenMenuButtonRef } =
		useAppLayoutContext();

	// When true, the focus will be returned to the menu button when the dialog is closed.
	// Otherwise, focus will be should be returned the body.
	// This is false by default, so focus will be returned to the body when a user presses a link in the dialog.
	const shouldReturnFocusToTriggerRef = useRef(false);

	const closeMobileMenuAndFocusOpenMenuButton = useCallback(() => {
		shouldReturnFocusToTriggerRef.current = true;
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
				closeMobileMenuAndFocusOpenMenuButton();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [closeMobileMenuAndFocusOpenMenuButton]);

	const prefersReducedMotion = usePrefersReducedMotion();
	const dialogTransitions = useTransition([isMobileMenuOpen], {
		from: { translateX: '-100%', opacity: 0 },
		enter: { translateX: '0%', opacity: 1 },
		leave: { translateX: '-100%', opacity: 0 },
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	});

	const onFocusLockDeactivation = useCallback(() => {
		// This should only run when the mobile menu is opened
		if (isMobileMenuOpen) return;

		if (shouldReturnFocusToTriggerRef.current) {
			// Focus the "menu button trigger"
			mobileMenuOpenMenuButtonRef.current?.focus();
		} else {
			// User has changed route, so focus the body
			document.querySelector('main')?.setAttribute('tabIndex', '-1');
			document.querySelector('main')?.focus();
			document.querySelector('main')?.removeAttribute('tabIndex');
		}

		// Reset the `shouldReturnFocusToTriggerRef` value
		shouldReturnFocusToTriggerRef.current = false;
	}, [isMobileMenuOpen, mobileMenuOpenMenuButtonRef]);

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
							onClick={closeMobileMenuAndFocusOpenMenuButton}
							style={{ opacity }}
						/>
						<FocusLock
							onDeactivation={() => {
								// https://github.com/theKashey/react-focus-lock?tab=readme-ov-file#unmounting-and-focus-management
								window.setTimeout(onFocusLockDeactivation, 250);
							}}
						>
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
								<CloseMenuButton
									onClick={closeMobileMenuAndFocusOpenMenuButton}
								/>
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

import {
	type MouseEventHandler,
	type PropsWithChildren,
	useEffect,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
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
	packs,
} from '../core';
import { Box } from '../box';
import { Flex } from '../flex';
import { CloseIcon } from '../icon';
import { VisuallyHidden } from '../a11y';
import { BaseButton, scaleIconOnHover } from '../button';
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
	const prefersReducedMotion = usePrefersReducedMotion();
	const [closeTransitionEnded, setCloseTransitionEnded] = useState(true);

	useEffect(() => {
		if (isMobileMenuOpen) {
			setCloseTransitionEnded(false);
		}
	}, [isMobileMenuOpen]);

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

	// Polyfill usage of `aria-modal`
	const { modalContainerRef } = useAriaModalPolyfill(isMobileMenuOpen);

	// Since react portals can not be rendered on the server and this component is always closed by default
	// This component doesn't need to be server side rendered
	if (!canUseDOM()) return null;

	const showDrawer = isMobileMenuOpen ? true : !closeTransitionEnded;

	return createPortal(
		<>
			{isMobileMenuOpen && <LockScroll />}
			<div ref={modalContainerRef}>
				<div
					css={{
						pointerEvents: 'none',
						position: 'absolute',
						opacity: isMobileMenuOpen ? 1 : 0,
						// By only having a transition when it's closed, we know when the close transition has ended
						// We need a 1ms transition for prefersReducedMotion to still ensure the transitionEnd event fires
						transition: isMobileMenuOpen
							? 'none'
							: `opacity ${prefersReducedMotion ? '1ms' : '150ms'}`,
					}}
					data-app-layout-sidebar="transitioner"
					onTransitionEnd={() => {
						setCloseTransitionEnded(true);
					}}
				/>
				<Overlay
					isOpen={isMobileMenuOpen}
					onClick={closeMobileMenu}
					prefersReducedMotion={prefersReducedMotion}
				/>
				{/* We have the sliding container always rendered, but the contents are conditionally rendered */}
				<Box
					css={{
						bottom: 0,
						left: 0,
						position: 'fixed',
						top: 0,
						transform: `translateX(${isMobileMenuOpen ? '0' : '-100%'})`,
						transition: `transform ${
							prefersReducedMotion ? '1ms' : '150ms'
						} ease`,
						zIndex: tokens.zIndex.dialog,
					}}
					display={{ [APP_LAYOUT_DESKTOP_BREAKPOINT]: 'none' }}
					width={APP_LAYOUT_SIDEBAR_WIDTH}
				>
					{showDrawer && (
						<FocusLock returnFocus>
							<Box
								aria-label="Menu"
								aria-modal
								background="shade"
								css={{
									inset: 0,
									overflowY: 'auto',
									position: 'fixed',
								}}
								display={{ [APP_LAYOUT_DESKTOP_BREAKPOINT]: 'none' }}
								palette={palette}
								role="dialog"
							>
								<CloseMenuButton onClick={closeMobileMenu} />
								{children}
							</Box>
						</FocusLock>
					)}
				</Box>
			</div>
		</>,
		document.body
	);
}

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
	isOpen,
	onClick,
	prefersReducedMotion,
}: {
	isOpen: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
	prefersReducedMotion: boolean;
}) {
	return (
		<div
			css={{
				// Only show in mobile devices
				// Without this, `AppLayoutSidebar` stories would not correctly
				backgroundColor: boxPalette.overlay,
				display: 'block',
				inset: 0,
				opacity: isOpen ? 1 : 0,
				pointerEvents: isOpen ? 'all' : 'none',
				position: 'fixed',
				transition: `opacity ${prefersReducedMotion ? '1ms' : '150ms'} ease`,
				zIndex: tokens.zIndex.overlay,
				[tokens.mediaQuery.min[APP_LAYOUT_DESKTOP_BREAKPOINT]]: {
					display: 'none',
				},
			}}
			onClick={onClick}
		/>
	);
}

function CloseMenuButton({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	const scaleIconCSS = scaleIconOnHover();
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
				css={{
					svg: {
						transition: scaleIconCSS.transition,
					},
					':focus': { outlineOffset: `-${packs.outline.outlineWidth}` },
					':hover svg': {
						transform: scaleIconCSS.transform,
					},
				}}
				flexDirection="column"
				focusRingFor="keyboard"
				fontSize="xs"
				gap={0.5}
				onClick={onClick}
				padding={1}
			>
				<CloseIcon />
				<span aria-hidden>Close</span>
				<VisuallyHidden>Close menu</VisuallyHidden>
			</Flex>
		</Flex>
	);
}

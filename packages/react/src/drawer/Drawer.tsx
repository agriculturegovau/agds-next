import {
	Fragment,
	FunctionComponent,
	MouseEventHandler,
	PropsWithChildren,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import { Box } from '../box';
import {
	boxPalette,
	canUseDOM,
	tokens,
	useAriaModalPolyfill,
	usePrefersReducedMotion,
} from '../core';
import { useIsMounted } from '../core/utils/useIsMounted';
import { getRequiredCloseHandler } from '../getCloseHandler';
import { DrawerDialog } from './DrawerDialog';

const WIDTH_MAP = {
	md: '32rem', // 512px
	lg: '45rem', // 720px
	previewMobile: 375 + 16 * 3,
	previewTablet: tokens.breakpoint.md + 16 * 3,
	previewDesktop: tokens.breakpoint.xl + 16 * 3,
};

export type DrawerWidth = keyof typeof WIDTH_MAP;

export type DrawerProps = PropsWithChildren<{
	/** The actions to display at the bottom of the drawer. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** On close of the drawer, this element will be focused, rather than the trigger element. */
	elementToFocusOnClose?: HTMLElement | null;
	/** If true, the drawer will be displayed. */
	isOpen?: boolean;
	/** Lighten the overlay so that the main content underneath is more visible while the draw is open. */
	mutedOverlay?: boolean;
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: () => void;
	/** @deprecated use `onClose` instead */
	onDismiss?: () => void;
	/** The title of the drawer. It can span lines but should not be too long. */
	title: string;
	/** The width of the drawer. */
	width?: DrawerWidth;
}>;

export const Drawer: FunctionComponent<DrawerProps> = ({
	actions,
	children,
	elementToFocusOnClose,
	isOpen = false,
	mutedOverlay = false,
	onClose,
	onDismiss,
	title,
	width = 'md',
}) => {
	const handleClose = getRequiredCloseHandler(onClose, onDismiss);
	const scrollbarWidth = useRef<number>(0);
	const prefersReducedMotion = usePrefersReducedMotion();
	const [closeTransitionEnded, setCloseTransitionEnded] = useState(true);
	// We need to check if the component is mounted to avoid hydration mismatch errors
	const isMounted = useIsMounted();

	useEffect(() => {
		scrollbarWidth.current =
			window.innerWidth - document.documentElement.clientWidth;
	}, []);

	useEffect(() => {
		if (isOpen) {
			setCloseTransitionEnded(false);
		}
	}, [isOpen]);

	// Close the Drawer when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				handleClose();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, handleClose]);

	// Polyfill usage of `aria-modal`
	const { modalContainerRef } = useAriaModalPolyfill(
		!isMounted ? false : isOpen
	);

	// Since react portals can not be rendered on the server and this component is always closed by default
	// This component doesn't need to be server side rendered
	if (!isMounted || !canUseDOM()) return null;

	const showDrawer = isOpen ? true : !closeTransitionEnded;

	return createPortal(
		<Fragment>
			{isOpen ? <LockScroll scrollbarWidth={scrollbarWidth.current} /> : null}

			<div ref={modalContainerRef}>
				<div
					css={{
						pointerEvents: 'none',
						position: 'absolute',
						opacity: isOpen ? 1 : 0,
						// By only having a transition when it's closed, we know when the close transition has ended
						// We need a 1ms transition for prefersReducedMotion to still ensure the transitionEnd event fires
						transition: isOpen
							? 'none'
							: `opacity ${prefersReducedMotion ? '1ms' : '150ms'}`,
					}}
					data-drawer="transitioner"
					onTransitionEnd={() => {
						setCloseTransitionEnded(true);
					}}
				/>
				<Overlay
					isOpen={isOpen}
					mutedOverlay={mutedOverlay}
					onClick={handleClose}
					prefersReducedMotion={prefersReducedMotion}
				/>
				{/* We have the sliding container always rendered, but the contents are conditionally rendered */}
				<Box
					css={{
						inset: 0,
						marginLeft: 'auto',
						position: 'fixed',
						transform: `translateX(${isOpen ? '0' : '100%'})`,
						transition: `transform ${
							prefersReducedMotion ? '1ms' : '150ms'
						} ease`,
						zIndex: tokens.zIndex.dialog,
					}}
					maxWidth={WIDTH_MAP[width]}
				>
					{showDrawer && (
						<DrawerDialog
							actions={actions}
							elementToFocusOnClose={elementToFocusOnClose}
							onClose={handleClose}
							title={title}
						>
							{children}
						</DrawerDialog>
					)}
				</Box>
			</div>
		</Fragment>,
		document.body
	);
};

function Overlay({
	isOpen,
	mutedOverlay,
	onClick,
	prefersReducedMotion,
}: {
	isOpen: boolean;
	mutedOverlay: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
	prefersReducedMotion: boolean;
}) {
	return (
		<div
			css={{
				pointerEvents: isOpen ? 'all' : 'none',
				position: 'fixed',
				inset: 0,
				backgroundColor: mutedOverlay
					? boxPalette.overlayMuted
					: boxPalette.overlay,
				opacity: isOpen ? 1 : 0,
				transition: `opacity ${prefersReducedMotion ? '1ms' : '150ms'} ease`,
				zIndex: tokens.zIndex.overlay,
			}}
			onClick={onClick}
		/>
	);
}

function LockScroll({ scrollbarWidth }: { scrollbarWidth: number }) {
	return (
		<Global
			styles={{
				// Fixes this Chrome/Edge bug https://issues.chromium.org/issues/40835364
				html: { marginRight: scrollbarWidth, scrollbarGutter: 'auto' },
				body: { overflow: 'hidden' },
			}}
		/>
	);
}

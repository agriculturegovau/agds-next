import {
	Fragment,
	FunctionComponent,
	MouseEventHandler,
	PropsWithChildren,
	ReactNode,
	useEffect,
	useRef,
} from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import { useTransition, animated, SpringValue } from '@react-spring/web';
import {
	boxPalette,
	canUseDOM,
	tokens,
	useAriaModalPolyfill,
	usePrefersReducedMotion,
} from '../core';
import { getRequiredCloseHandler } from '../getCloseHandler';
import { DrawerDialog, DrawerDialogWidth } from './DrawerDialog';

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
	width?: DrawerDialogWidth;
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

	useEffect(() => {
		scrollbarWidth.current =
			window.innerWidth - document.documentElement.clientWidth;
	}, []);

	// Close the Drawer when the user presses the escape key

	// Polyfill usage of `aria-modal`
	const { modalContainerRef } = useAriaModalPolyfill(isOpen);

	// Animation styles
	const prefersReducedMotion = usePrefersReducedMotion();
	const dialogTransitions = useTransition([isOpen], {
		from: { translateX: '100%', opacity: 0 },
		enter: { translateX: '0%', opacity: 1 },
		leave: { translateX: '100%', opacity: 0 },
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	});

	// Since react portals can not be rendered on the server and this component is always closed by default
	// This component doesn't need to be server side rendered
	if (!canUseDOM()) return null;

	console.log(`document.activeElement`, document.activeElement);
	return createPortal(
		<Fragment>
			{isOpen ? <LockScroll scrollbarWidth={scrollbarWidth.current} /> : null}
			{/* {dialogTransitions(({ translateX, opacity }, item) =>
				item ? ( */}

			<div ref={modalContainerRef}>
				<Overlay
					isOpen={isOpen}
					mutedOverlay={mutedOverlay}
					onClick={handleClose}
					// style={{ opacity }}
				/>
				<DrawerDialog
					actions={actions}
					elementToFocusOnClose={elementToFocusOnClose}
					isOpen={isOpen}
					onClose={handleClose}
					// style={{ translateX }}
					title={title}
					width={width}
				>
					{children}
				</DrawerDialog>
			</div>
			{/* ) : null} */}
			{/* ) : null
			)} */}
		</Fragment>,
		document.body
	);
};

function Overlay({
	isOpen,
	onClick,
	// style,
	mutedOverlay,
}: {
	isOpen: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
	// style: { opacity: SpringValue<number> };
	mutedOverlay: boolean;
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
				zIndex: tokens.zIndex.overlay,
				opacity: isOpen ? 1 : 0,
				transition: 'opacity 0.5s ease-in-out',
				// visibility: isOpen ? 'visible' : 'hidden',
			}}
			onClick={onClick}
			// style={style}
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

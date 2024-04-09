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
	/** If true, the drawer will be displayed. */
	isOpen?: boolean;
	/** @deprecated use `onClose` instead */
	onDismiss?: () => void;
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: () => void;
	/** The title of the drawer. It can span lines but should not be too long. */
	title: string;
	/** The width of the drawer. */
	width?: DrawerDialogWidth;
	/** Lighten the overlay so that the main content underneath is more visible while the draw is open. */
	mutedOverlay?: boolean;
}>;

export const Drawer: FunctionComponent<DrawerProps> = ({
	actions,
	children,
	isOpen = false,
	onClose,
	onDismiss,
	title,
	width = 'md',
	mutedOverlay = false,
}) => {
	const handleClose = getRequiredCloseHandler(onClose, onDismiss);
	const scrollbarWidth = useRef<number>(0);

	useEffect(() => {
		scrollbarWidth.current =
			window.innerWidth - document.documentElement.clientWidth;
	}, []);

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

	return createPortal(
		<Fragment>
			{isOpen ? <LockScroll scrollbarWidth={scrollbarWidth.current} /> : null}
			{dialogTransitions(({ translateX, opacity }, item) =>
				item ? (
					<div ref={modalContainerRef}>
						<Overlay
							onClick={handleClose}
							style={{ opacity }}
							mutedOverlay={mutedOverlay}
						/>
						<DrawerDialog
							onClose={handleClose}
							title={title}
							actions={actions}
							width={width}
							style={{ translateX }}
						>
							{children}
						</DrawerDialog>
					</div>
				) : null
			)}
		</Fragment>,
		document.body
	);
};

function Overlay({
	onClick,
	style,
	mutedOverlay,
}: {
	onClick: MouseEventHandler<HTMLDivElement>;
	style: { opacity: SpringValue<number> };
	mutedOverlay: boolean;
}) {
	return (
		<animated.div
			onClick={onClick}
			css={{
				position: 'fixed',
				inset: 0,
				backgroundColor: mutedOverlay
					? boxPalette.overlayMuted
					: boxPalette.overlay,
				zIndex: tokens.zIndex.overlay,
			}}
			style={style}
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

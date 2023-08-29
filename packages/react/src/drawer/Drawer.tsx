import {
	Fragment,
	FunctionComponent,
	MouseEventHandler,
	PropsWithChildren,
	ReactNode,
	useEffect,
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
import { DrawerDialog } from './DrawerDialog';

export type DrawerProps = PropsWithChildren<{
	/** The actions to display at the bottom of the drawer. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** If true, the drawer will be displayed. */
	isOpen?: boolean;
	/** Function to be called when the drawer is closed. */
	onDismiss: () => void;
	/** The title of the drawer. It can span lines but should not be too long. */
	title: string;
}>;

export const Drawer: FunctionComponent<DrawerProps> = ({
	actions,
	children,
	isOpen = false,
	onDismiss,
	title,
}) => {
	// Close the Drawer when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				onDismiss();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, onDismiss]);

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
			{isOpen ? <LockScroll /> : null}
			{dialogTransitions(({ translateX, opacity }, item) =>
				item ? (
					<div ref={modalContainerRef}>
						<Overlay onClick={() => onDismiss()} style={{ opacity }} />
						<DrawerDialog
							onDismiss={onDismiss}
							title={title}
							actions={actions}
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
}: {
	onClick: MouseEventHandler<HTMLDivElement>;
	style: { opacity: SpringValue<number> };
}) {
	return (
		<animated.div
			onClick={onClick}
			css={{
				position: 'fixed',
				inset: 0,
				backgroundColor: boxPalette.overlay,
				zIndex: tokens.zIndex.overlay,
			}}
			style={style}
		/>
	);
}

function LockScroll() {
	return <Global styles={{ body: { overflow: 'hidden' } }} />;
}

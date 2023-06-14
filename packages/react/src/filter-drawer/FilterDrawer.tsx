import {
	Fragment,
	FunctionComponent,
	PropsWithChildren,
	ReactNode,
	useEffect,
} from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import { useTransition, animated, SpringValue } from '@react-spring/web';
import {
	boxPalette,
	useAriaModalPolyfill,
	usePrefersReducedMotion,
} from '../core';
import { FilterDrawerDialog } from './FilterDrawerDialog';

export type FilterDrawerProps = PropsWithChildren<{
	/** The actions to display at the bottom of the drawer. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** If true, the drawer will be displayed. */
	isOpen?: boolean;
	/** Function to be called when the drawer is closed. */
	onDismiss: () => void;
	/** The title of the drawer. It can span lines but should not be too long. */
	title: string;
}>;

export const FilterDrawer: FunctionComponent<FilterDrawerProps> = ({
	actions,
	children,
	isOpen = false,
	onDismiss,
	title,
}) => {
	// Close the FilterDrawer when the user presses the escape key
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
	const [dialogTransitions] = useTransition(isOpen, () => ({
		from: { translateX: '100%', opacity: 0 },
		enter: { translateX: '0%', opacity: 1 },
		leave: { translateX: '100%', opacity: 0 },
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	}));

	return createPortal(
		<Fragment>
			{isOpen ? <LockScroll /> : null}
			{dialogTransitions(({ translateX, opacity }, item) =>
				item ? (
					<div ref={modalContainerRef}>
						<Overlay style={{ opacity }} />
						<FilterDrawerDialog
							onDismiss={onDismiss}
							title={title}
							actions={actions}
							style={{ translateX }}
						>
							{children}
						</FilterDrawerDialog>
					</div>
				) : null
			)}
		</Fragment>,
		document.body
	);
};

function Overlay({ style }: { style: { opacity: SpringValue<number> } }) {
	return (
		<animated.div
			css={{
				position: 'fixed',
				inset: 0,
				backgroundColor: boxPalette.overlay,
				zIndex: 100,
			}}
			style={style}
		/>
	);
}

function LockScroll() {
	return <Global styles={{ body: { overflow: 'hidden' } }} />;
}

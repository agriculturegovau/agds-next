import { Fragment, FunctionComponent, useEffect } from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import { useTransition, animated } from '@react-spring/web';
import { useAriaModalPolyfill, usePrefersReducedMotion } from '../core';
import {
	FilterDrawerDialog,
	FilterDrawerDialogProps,
} from './FilterDrawerDialog';

export type FilterDrawerProps = FilterDrawerDialogProps & {
	isOpen?: boolean;
};

export const FilterDrawer: FunctionComponent<FilterDrawerProps> = ({
	actions,
	children,
	isOpen = false,
	onDismiss,
	title,
	overlay = true,
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
			{isOpen && overlay ? <LockScroll /> : null}
			{dialogTransitions(({ translateX, opacity }, item) =>
				item ? (
					<div ref={modalContainerRef}>
						{overlay ? (
							<animated.div
								css={{
									position: 'fixed',
									inset: 0,
									backgroundColor: `rgba(0, 0, 0, 0.8)`,
									zIndex: 100,
									overflow: 'hidden',
								}}
								style={{ opacity }}
							/>
						) : null}
						<FilterDrawerDialog
							onDismiss={onDismiss}
							title={title}
							actions={actions}
							overlay={overlay}
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

const LockScroll = () => <Global styles={{ body: { overflow: 'hidden' } }} />;

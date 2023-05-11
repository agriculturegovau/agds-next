import { Fragment, FunctionComponent, useEffect, useRef } from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import { useTransition, animated } from '@react-spring/web';
import { usePrefersReducedMotion } from '../core';
import { SideDrawerDialog, SideDrawerDialogProps } from './SideDrawerDialog';

export type SideDrawerProps = SideDrawerDialogProps & {
	isOpen?: boolean;
};

export const SideDrawer: FunctionComponent<SideDrawerProps> = ({
	actions,
	children,
	isOpen = false,
	onDismiss,
	title,
	overlay = true,
}) => {
	const coverRef = useRef<HTMLDivElement>(null);

	// Close the SideDrawer when the user presses the escape key
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

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the SideDrawer is opened.
	// This is because `aria-SideDrawer` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-SideDrawer_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!overlay) return;
		if (!isOpen || !coverRef.current) return;

		const rootNodes: Element[] = [];
		const originalAttrs: (string | null)[] = [];

		document.querySelectorAll('body > *').forEach(function (node) {
			if (node === coverRef.current) return;
			const attr = node.getAttribute('aria-hidden');
			const alreadyHidden = attr !== null && attr !== 'false';
			if (alreadyHidden) return;
			rootNodes.push(node);
			originalAttrs.push(attr);
			node.setAttribute('aria-hidden', 'true');
		});

		return () => {
			rootNodes.forEach((node, index) => {
				const originalValue = originalAttrs[index];
				if (originalValue === null) {
					node.removeAttribute('aria-hidden');
				} else {
					node.setAttribute('aria-hidden', originalValue);
				}
			});
		};
	}, [overlay, isOpen]);

	// Animation styles
	const prefersReducedMotion = usePrefersReducedMotion();
	const [overlayTransitions] = useTransition(overlay && isOpen, () => ({
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	}));
	const [dialogTransitions] = useTransition(isOpen, () => ({
		from: { translateX: '100%' },
		enter: { translateX: '0%' },
		leave: { translateX: '100%' },
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	}));

	return createPortal(
		<Fragment>
			{overlay ? <LockScroll /> : null}
			{overlayTransitions((style, item) =>
				item ? (
					<animated.div
						ref={coverRef}
						css={{
							position: 'fixed',
							inset: 0,
							backgroundColor: `rgba(0, 0, 0, 0.8)`,
							zIndex: 100,
							overflow: 'hidden',
						}}
						style={style}
					/>
				) : null
			)}
			{dialogTransitions((style, item) =>
				item ? (
					<SideDrawerDialog
						onDismiss={onDismiss}
						title={title}
						actions={actions}
						overlay={overlay}
						style={style}
					>
						{children}
					</SideDrawerDialog>
				) : null
			)}
		</Fragment>,
		document.body
	);
};

const LockScroll = () => <Global styles={{ body: { overflow: 'hidden' } }} />;

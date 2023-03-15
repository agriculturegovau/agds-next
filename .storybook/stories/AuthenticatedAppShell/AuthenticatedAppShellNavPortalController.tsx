import { Box } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { ReactNode, useEffect, useRef } from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

export const AuthenticatedAppShellNavPortalController = ({
	isOpenAsModal,
	isHidden,
	children,
	closeMenu,
}: {
	children: ReactNode;
	isOpenAsModal: boolean;
	isHidden: boolean;
	closeMenu: () => void;
}) => {
	const dialogRef = useRef<HTMLDivElement>(null);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				closeMenu();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [closeMenu]);

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the modal is opened.
	// This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!isOpenAsModal || !dialogRef.current) return;

		const rootNodes: Element[] = [];
		const originalAttrs: (string | null)[] = [];

		document.querySelectorAll('body > *').forEach(function (node) {
			if (node === dialogRef.current) return;
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
	}, [isOpenAsModal]);

	const element = (
		<Box
			css={{
				[tokens.mediaQuery.max.md]: {
					zIndex: 200,
					position: 'fixed',
					display: isOpenAsModal ? 'block' : 'none',
					top: 0,
					left: 0,
					bottom: 0,
					width: '100%',
					boxSizing: 'border-box',
					overflowY: 'auto',
				},
			}}
		>
			<FocusLock returnFocus disabled={!isOpenAsModal}>
				{children}
			</FocusLock>
		</Box>
	);

	if (isOpenAsModal) {
		return createPortal(element, document.body);
	}

	if (isHidden) return null;

	return element;
};

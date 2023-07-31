import { Fragment, FunctionComponent, useEffect } from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import { canUseDOM, useAriaModalPolyfill } from '../core';
import { ModalCover } from './ModalCover';
import { ModalDialog, ModalDialogProps } from './ModalDialog';

export type ModalProps = ModalDialogProps & {
	/** If true, the modal will be rendered.  */
	isOpen?: boolean;
};

export const Modal: FunctionComponent<ModalProps> = ({
	actions,
	children,
	isOpen = false,
	onDismiss,
	title,
}) => {
	// Close the modal when the user presses the escape key
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

	if (!isOpen) return null;

	// Since react portals can not be rendered on the server and this component is always closed by default
	// This component doesn't need to be server side rendered
	if (!canUseDOM()) return null;

	return createPortal(
		<Fragment>
			<LockScroll />
			<ModalCover ref={modalContainerRef}>
				<ModalDialog onDismiss={onDismiss} title={title} actions={actions}>
					{children}
				</ModalDialog>
			</ModalCover>
		</Fragment>,
		document.body
	);
};

const LockScroll = () => <Global styles={{ body: { overflow: 'hidden' } }} />;

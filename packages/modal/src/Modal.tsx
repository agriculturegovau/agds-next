import { Global } from '@emotion/react';
import { Fragment, KeyboardEvent, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { ModalCover } from './ModalCover';
import { ModalPanel, ModalPanelProps } from './ModalPanel';

export type ModalProps = ModalPanelProps & {
	isOpen?: boolean;
};

export const Modal = ({ children, isOpen, onDismiss, title }: ModalProps) => {
	const handleEscape = useCallback(
		(e: KeyboardEvent<HTMLDivElement>) => {
			if (isOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				onDismiss();
			}
		},
		[isOpen, onDismiss]
	);

	if (!isOpen) {
		return null;
	}
	return createPortal(
		<Fragment>
			<LockScroll />
			<ModalCover onKeyDown={handleEscape}>
				<ModalPanel onDismiss={onDismiss} title={title}>
					{children}
				</ModalPanel>
			</ModalCover>
		</Fragment>,
		document.body
	);
};

const LockScroll = () => <Global styles={{ body: { overflow: 'hidden' } }} />;

import { ReactNode, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { ModalCover } from './ModalCover';
import { ModalPanel, ModalPanelProps } from './ModalPanel';

export type ModalProps = PropsWithChildren<{
	isOpen?: boolean;
	footerContent?: ReactNode;
}> &
	Pick<ModalPanelProps, 'onDismiss'>;

export const Modal = ({ children, isOpen, onDismiss }: ModalProps) => {
	if (!isOpen) {
		return null;
	}

	return createPortal(
		<ModalCover>
			<ModalPanel onDismiss={onDismiss}>{children}</ModalPanel>
		</ModalCover>,
		document.body
	);
};

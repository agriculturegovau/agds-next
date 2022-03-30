import { PropsWithChildren, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

import { ModalCover } from './ModalCover';
import { ModalPanel, ModalPanelProps } from './ModalPanel';

export type ModalProps = PropsWithChildren<{
	isOpen?: boolean;
	onDismiss: ModalPanelProps['onDismiss'];
}>;

export const Modal: FunctionComponent<ModalProps> = ({
	children,
	isOpen,
	onDismiss,
}) => {
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

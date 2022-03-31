import { FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

import { ModalCover } from './ModalCover';
import { ModalPanel, ModalPanelProps } from './ModalPanel';

export type ModalProps = ModalPanelProps & {
	isOpen?: boolean;
};

export const Modal: FunctionComponent<ModalProps> = ({
	children,
	isOpen,
	onDismiss,
	title,
}) => {
	if (!isOpen) {
		return null;
	}
	return createPortal(
		<ModalCover>
			<ModalPanel onDismiss={onDismiss} title={title}>
				{children}
			</ModalPanel>
		</ModalCover>,
		document.body
	);
};

import { FunctionComponent, KeyboardEvent, useCallback } from 'react';
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
		<ModalCover onKeyDown={handleEscape}>
			<ModalPanel onDismiss={onDismiss} title={title}>
				{children}
			</ModalPanel>
		</ModalCover>,
		document.body
	);
};

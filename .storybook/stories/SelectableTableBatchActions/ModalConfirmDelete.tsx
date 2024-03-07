import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { Text } from '@ag.ds-next/react/text';
import { Modal } from '@ag.ds-next/react/modal';
import { plural, RowData } from './utils';

export type ModalConfirmDeleteProps = {
	isOpen: boolean;
	onConfirm: () => void;
	/** @deprecated use `onClose` instead */
	onDismiss: () => void;
	onClose: () => void;
	itemsToDelete: RowData | RowData[];
};

export function ModalConfirmDelete({
	isOpen,
	onConfirm,
	onDismiss,
	onClose,
	itemsToDelete,
}: ModalConfirmDeleteProps) {
	const [submitting, setSubmitting] = useState(false);

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 2000);
	}

	const { title, description } = useMemo(() => {
		if (Array.isArray(itemsToDelete)) {
			return {
				title: `Are you sure you want to delete ${
					itemsToDelete.length
				} ${plural(itemsToDelete.length, 'certificate', 'certificates')}?`,
				description: `Certificates will be deleted immediately. You can not undo this action.`,
			};
		}
		return {
			title: `Are you sure you want to delete this certificate?`,
			description: `Certificate ${itemsToDelete.certNumber} will be deleted immediately. You can not undo this action.`,
		};
	}, [itemsToDelete]);

	return (
		<Modal
			isOpen={isOpen}
			onDismiss={onDismiss}
			onClose={onClose}
			title={title}
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Delete items
					</Button>
					<Button variant="secondary" onClick={onClose || onDismiss}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<Text as="p">{description}</Text>
		</Modal>
	);
}

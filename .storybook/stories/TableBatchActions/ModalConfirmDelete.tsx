import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { Text } from '@ag.ds-next/react/text';
import { Modal } from '@ag.ds-next/react/modal';
import { RowData } from './utils';

export type ModalConfirmDeleteProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onDismiss: () => void;
	itemsToDelete: RowData | RowData[];
};

export function ModalConfirmDelete({
	isOpen,
	onConfirm,
	onDismiss,
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
				title: `Are you sure you want to delete ${itemsToDelete.length} certificates?`,
				description: `These certificates will be deleted immediately. You can not undo this action.`,
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
			title={title}
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Delete items
					</Button>
					<Button variant="secondary" onClick={onDismiss}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<Text as="p">{description}</Text>
		</Modal>
	);
}

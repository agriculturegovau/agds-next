import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/src/button';
import { Text } from '@ag.ds-next/react/src/text';
import { Modal } from '@ag.ds-next/react/src/modal';
import { plural /* RowData */ } from './lib/utils';
import { StaffMemberWithIndex } from './lib/types';

type RowData = StaffMemberWithIndex;

export type ModalConfirmRemoveAccessProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onClose: () => void;
	itemsToDelete: RowData | RowData[];
};

export function ModalConfirmRemoveAccess({
	isOpen,
	onConfirm,
	onClose,
	itemsToDelete,
}: ModalConfirmRemoveAccessProps) {
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
				title: `Are you sure you want to remove access for ${
					itemsToDelete.length
				} staff ${plural(itemsToDelete.length, 'member', 'members')}?`,
				description:
					'Access will be removed immediately. You can not undo this action.',
			};
		}
		return {
			title: `Are you sure you want to remove access for ${itemsToDelete.name}?`,
			description:
				'Access will be removed immediately. You can not undo this action.',
		};
	}, [itemsToDelete]);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={title}
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Remove access
					</Button>
					<Button variant="secondary" onClick={onClose}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<Text as="p">{description}</Text>
		</Modal>
	);
}

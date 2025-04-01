import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { Text } from '@ag.ds-next/react/text';
import { Modal } from '@ag.ds-next/react/modal';
import { plural /* RowData */ } from './lib/utils';
import { StaffMember, StaffMemberWithIndex } from './lib/types';

type RowData = StaffMemberWithIndex | StaffMember;

export type ModalConfirmRemoveAccessProps = {
	isOpen: boolean;
	itemsToDelete: RowData | RowData[];
	onClose: () => void;
	onConfirm: () => void;
};

export function ModalConfirmRemoveAccess({
	isOpen,
	itemsToDelete,
	onClose,
	onConfirm,
}: ModalConfirmRemoveAccessProps) {
	const [submitting, setSubmitting] = useState(false);

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 1500);
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
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Remove access
					</Button>
					<Button onClick={onClose} variant="secondary">
						Cancel
					</Button>
				</ButtonGroup>
			}
			isOpen={isOpen}
			onClose={onClose}
			title={title}
		>
			<Text as="p">{description}</Text>
		</Modal>
	);
}

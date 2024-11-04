import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/src/button';
import { Text } from '@ag.ds-next/react/src/text';
import { Modal } from '@ag.ds-next/react/src/modal';
import { plural /* RowData */ } from './lib/utils';
import { StaffMember, StaffMemberWithIndex } from './lib/types';

type RowData = StaffMemberWithIndex | StaffMember;

export type ModalConfirmRemoveAccessProps = {
	isOpen: boolean;
	itemsToDelete: RowData | RowData[];
	onClose: () => void;
	onConfirm: () => void;
	/** On close of the modal, this element will be focused, rather than the trigger element. */
	pageAlertRef?: HTMLElement | null;
};

export function ModalConfirmRemoveAccess({
	isOpen,
	itemsToDelete,
	onClose,
	onConfirm,
	pageAlertRef,
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
			elementToFocusOnClose={pageAlertRef}
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

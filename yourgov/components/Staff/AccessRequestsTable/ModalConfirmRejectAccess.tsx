import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/src/button';
import { Text } from '@ag.ds-next/react/src/text';
import { Modal } from '@ag.ds-next/react/src/modal';
import { plural } from '../lib/utils';
import { StaffMemberAccessRequest } from '../lib/accessRequests';

export type ModalConfirmRejectAccessProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onClose: () => void;
	itemsToReject: StaffMemberAccessRequest | StaffMemberAccessRequest[];
	/** On close of the modal, this element will be focused, rather than the trigger element. */
	pageAlertElement?: HTMLElement | null;
};

export function ModalConfirmRejectAccess({
	isOpen,
	onConfirm,
	onClose,
	itemsToReject,
	pageAlertElement,
}: ModalConfirmRejectAccessProps) {
	const [submitting, setSubmitting] = useState(false);

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 1500);
	}

	const { title, description } = useMemo(() => {
		if (Array.isArray(itemsToReject)) {
			return {
				title: `Are you sure you want to remove access for ${
					itemsToReject.length
				} staff ${plural(itemsToReject.length, 'member', 'members')}?`,
				description:
					'Access will be removed immediately. You can not undo this action.',
			};
		}
		return {
			title: `Are you sure you want to remove access for ${itemsToReject.firstName} ${itemsToReject.lastName}?`,
			description:
				'Access will be removed immediately. You can not undo this action.',
		};
	}, [itemsToReject]);

	return (
		<Modal
			elementToFocusOnClose={pageAlertElement}
			isOpen={isOpen}
			onClose={onClose}
			title={title}
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Reject access
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

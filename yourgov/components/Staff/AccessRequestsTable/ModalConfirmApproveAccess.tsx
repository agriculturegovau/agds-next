import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/src/button';
import { Text } from '@ag.ds-next/react/src/text';
import { Modal } from '@ag.ds-next/react/src/modal';
import { plural } from '../lib/utils';
import { StaffMemberAccessRequest } from '../lib/accessRequests';

export type ModalConfirmApproveAccessProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onClose: () => void;
	itemsToApprove: StaffMemberAccessRequest | StaffMemberAccessRequest[];
	/** On close of the modal, this element will be focused, rather than the trigger element. */
	pageAlertElement?: HTMLElement | null;
};

export function ModalConfirmApproveAccess({
	isOpen,
	onConfirm,
	onClose,
	itemsToApprove,
	pageAlertElement,
}: ModalConfirmApproveAccessProps) {
	const [submitting, setSubmitting] = useState(false);

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 1500);
	}

	const { title, description } = useMemo(() => {
		if (Array.isArray(itemsToApprove)) {
			return {
				title: `Are you sure you want to approve access for ${
					itemsToApprove.length
				} staff ${plural(itemsToApprove.length, 'member', 'members')}?`,
				description: 'Access will be approved immediately.',
			};
		}
		return {
			title: `Are you sure you want to approve access for ${itemsToApprove.firstName} ${itemsToApprove.lastName}?`,
			description: 'Access will be approved immediately.',
		};
	}, [itemsToApprove]);

	return (
		<Modal
			elementToFocusOnClose={pageAlertElement}
			isOpen={isOpen}
			onClose={onClose}
			title={title}
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Approve access
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

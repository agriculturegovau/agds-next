import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { Text } from '@ag.ds-next/react/text';
import { Modal } from '@ag.ds-next/react/modal';
import { plural } from '../lib/utils';
import { StaffMemberAccessRequest } from '../lib/accessRequests';

export type ModalConfirmApproveAccessProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onClose: () => void;
	itemsToApprove: StaffMemberAccessRequest | StaffMemberAccessRequest[];
};

export function ModalConfirmApproveAccess({
	isOpen,
	onConfirm,
	onClose,
	itemsToApprove,
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
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Approve access
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

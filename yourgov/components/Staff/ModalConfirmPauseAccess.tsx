import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { Text } from '@ag.ds-next/react/text';
import { Modal } from '@ag.ds-next/react/modal';
import { plural /* RowData */ } from './lib/utils';
import { StaffMemberWithIndex } from './lib/types';

type RowData = StaffMemberWithIndex;

export type ModalConfirmPauseAccessProps = {
	isOpen: boolean;
	itemsToPause: RowData | RowData[];
	onClose: () => void;
	onConfirm: () => void;
};

export function ModalConfirmPauseAccess({
	isOpen,
	itemsToPause,
	onClose,
	onConfirm,
}: ModalConfirmPauseAccessProps) {
	const [submitting, setSubmitting] = useState(false);

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 1500);
	}

	const { title, description } = useMemo(() => {
		if (Array.isArray(itemsToPause)) {
			return {
				title: `Are you sure you want to pause access for ${
					itemsToPause.length
				} staff ${plural(itemsToPause.length, 'member', 'members')}?`,
				description:
					'Access will be paused immediately. You can not undo this action.',
			};
		}
		return {
			title: `Are you sure you want to pause access for ${itemsToPause.name}?`,
			description:
				'Access will be paused immediately. You can not undo this action.',
		};
	}, [itemsToPause]);

	return (
		<Modal
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Pause access
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

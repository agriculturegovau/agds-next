import { useMemo, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/src/button';
import { Text } from '@ag.ds-next/react/src/text';
import { Modal } from '@ag.ds-next/react/src/modal';
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
			isOpen={isOpen}
			onClose={onClose}
			title={title}
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Pause access
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

import { useMemo, useState } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/react/src/button';
import {
	TableBatchActionsBar,
	TableBatchActionsTitle,
} from '@ag.ds-next/react/src/table';
import { plural } from './lib/utils';
import { useDataContext, useSortAndFilterContext } from './lib/contexts';
import { ModalConfirmChangeRole } from './ModalConfirmChangeRole';
import { ModalConfirmPauseAccess } from './ModalConfirmPauseAccess';
import { ModalConfirmRemoveAccess } from './ModalConfirmRemoveAccess';
import { StaffMemberWithIndex } from './lib/types';

export const DataTableBatchActionsBar = () => {
	const { selection, clearRowSelections } = useSortAndFilterContext();
	const { data } = useDataContext();

	const staffNameToStaffMemberMap = useMemo(
		() =>
			data.reduce(
				(acc, staffMember) =>
					staffMember?.name
						? {
								...acc,
								[staffMember.name]: staffMember,
						  }
						: acc,
				{} as Record<StaffMemberWithIndex['name'], StaffMemberWithIndex>
			),
		[data]
	);

	const items = selection.map((staffMemberId) => {
		const staffName = staffMemberId.replaceAll(
			'-',
			' '
		) as StaffMemberWithIndex['name'];
		return staffNameToStaffMemberMap[staffName];
	});

	const [removeModalOpen, setRemoveModalOpen] = useState(false);
	const [pauseModalOpen, setPauseModalOpen] = useState(false);
	const [modalChangeRoleOpen, setModalChangeRoleOpen] = useState(false);

	const onConfirmRemove = () => {
		console.log('Remove access');
		setRemoveModalOpen(false);
	};
	const onConfirmPause = () => {
		console.log('Pause access');
		setPauseModalOpen(false);
	};
	const onConfirmChangeRole = () => {
		console.log('Change role');
		setModalChangeRoleOpen(false);
	};

	if (selection.length) {
		return (
			<TableBatchActionsBar>
				<TableBatchActionsTitle>
					Apply action to {selection.length}{' '}
					{plural(selection.length, 'item', 'items')}
				</TableBatchActionsTitle>

				<ButtonGroup>
					<Button
						variant="secondary"
						size="sm"
						onClick={() => {
							setModalChangeRoleOpen(true);
						}}
					>
						Change role
					</Button>

					<Button
						variant="secondary"
						size="sm"
						onClick={() => {
							setPauseModalOpen(true);
						}}
					>
						Pause access
					</Button>

					<Button
						variant="secondary"
						size="sm"
						onClick={() => {
							setRemoveModalOpen(true);
						}}
					>
						Remove access
					</Button>

					<Button variant="tertiary" size="sm" onClick={clearRowSelections}>
						Cancel
					</Button>
				</ButtonGroup>

				<ModalConfirmChangeRole
					isOpen={modalChangeRoleOpen}
					onClose={() => setModalChangeRoleOpen(false)}
					onConfirm={onConfirmChangeRole}
				/>

				<ModalConfirmPauseAccess
					itemsToPause={items}
					isOpen={pauseModalOpen}
					onClose={() => setPauseModalOpen(false)}
					onConfirm={onConfirmPause}
				/>

				<ModalConfirmRemoveAccess
					itemsToDelete={items}
					isOpen={removeModalOpen}
					onClose={() => setRemoveModalOpen(false)}
					onConfirm={onConfirmRemove}
				/>
			</TableBatchActionsBar>
		);
	}

	return null;
};

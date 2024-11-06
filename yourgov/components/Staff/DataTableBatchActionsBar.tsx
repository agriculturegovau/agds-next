import { useMemo, useState } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/react/src/button';
import {
	TableBatchActionsBar,
	TableBatchActionsTitle,
} from '@ag.ds-next/react/src/table';
import { plural } from './lib/utils';
import { useDataContext, useSortAndFilterContext } from './lib/contexts';
import { ModalConfirmPauseAccess } from './ModalConfirmPauseAccess';
import { ModalConfirmRemoveAccess } from './ModalConfirmRemoveAccess';
import { StaffMemberWithIndex } from './lib/types';
import { useStaffGlobalState } from './StaffProvider';
import { ModalConfirmChangeRole } from './ModalConfirmChangeRole';

export const DataTableBatchActionsBar = ({
	pageAlertElement,
}: {
	/** On close of the action modals, this element will be focused, rather than the trigger element. */
	pageAlertElement?: HTMLElement | null;
}) => {
	const { setSuccessMessageType, setUpdatedStaffMemberName } = useDataContext();
	const { staffMembersDelete, staffMembersUpdate } = useStaffGlobalState();
	const { selection, clearRowSelections } = useSortAndFilterContext();
	const { displayData } = useDataContext();

	const staffIdToStaffMemberMap = useMemo(
		() =>
			displayData.reduce(
				(acc, staffMember) =>
					staffMember?.name
						? {
								...acc,
								[staffMember.id]: staffMember,
						  }
						: acc,
				{} as Record<StaffMemberWithIndex['id'], StaffMemberWithIndex>
			),
		[displayData]
	);

	const items = selection.map((staffMemberId) => {
		return staffIdToStaffMemberMap[staffMemberId];
	});

	const [removeModalOpen, setRemoveModalOpen] = useState(false);
	const [pauseModalOpen, setPauseModalOpen] = useState(false);
	const [modalChangeRoleOpen, setModalChangeRoleOpen] = useState(false);

	const onConfirmRemove = () => {
		staffMembersDelete(items);
		setRemoveModalOpen(false);
		clearRowSelections();

		setUpdatedStaffMemberName?.(
			`${items.length} ${items.length > 1 ? 'people' : 'person'}`
		);
		setSuccessMessageType?.(items.length > 1 ? 'removeBatch' : 'remove');
	};
	const onConfirmPause = () => {
		staffMembersUpdate({ staffToUpdate: items, updates: { status: 'Paused' } });
		setPauseModalOpen(false);
		clearRowSelections();

		setUpdatedStaffMemberName?.(
			`${items.length} ${items.length > 1 ? 'people' : 'person'}`
		);
		setSuccessMessageType?.(items.length > 1 ? 'pauseBatch' : 'pause');
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
					{/* TODO bring this back post-usability testing */}
					{/* <Button
						variant="secondary"
						size="sm"
						onClick={() => {
							setModalChangeRoleOpen(true);
						}}
					>
						Change role
					</Button> */}

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
					pageAlertElement={pageAlertElement}
				/>

				<ModalConfirmPauseAccess
					isOpen={pauseModalOpen}
					itemsToPause={items}
					onClose={() => setPauseModalOpen(false)}
					onConfirm={onConfirmPause}
					pageAlertElement={pageAlertElement}
				/>

				<ModalConfirmRemoveAccess
					isOpen={removeModalOpen}
					itemsToDelete={items}
					onClose={() => setRemoveModalOpen(false)}
					onConfirm={onConfirmRemove}
					pageAlertElement={pageAlertElement}
				/>
			</TableBatchActionsBar>
		);
	}

	return null;
};

import { ReactNode, useState } from 'react';
import { TableCell, TableRow } from '@ag.ds-next/react/src/table';
import { Checkbox } from '@ag.ds-next/react/src/checkbox';
import { VisuallyHidden } from '@ag.ds-next/react/src/a11y';
import { StatusBadge } from '@ag.ds-next/react/src/status-badge';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuItem,
	DropdownMenuPanel,
} from '@ag.ds-next/react/dropdown-menu';
import { useDataContext, useSortAndFilterContext } from './lib/contexts';
import { ModalConfirmChangeRole } from './ModalConfirmChangeRole';
import { ModalConfirmPauseAccess } from './ModalConfirmPauseAccess';
import { ModalConfirmRemoveAccess } from './ModalConfirmRemoveAccess';
import { StaffMemberWithIndex } from './lib/types';
import { useStaffGlobalState } from './StaffProvider';

const itemStatusMap = {
	Active: {
		label: 'Active',
		tone: 'successMedium',
	},
	Invited: {
		label: 'Invited',
		tone: 'inProgressLow',
	},
	Paused: {
		label: 'Paused',
		tone: 'pausedLow',
	},
} as const;

export const DataTableRowStatus = ({
	status,
}: {
	status: keyof typeof itemStatusMap;
}) => {
	return (
		<TableCell>
			<StatusBadge appearance="subtle" {...itemStatusMap[status]} />
		</TableCell>
	);
};

export const DataTableRow = ({
	children,
	item,
	itemId,
	name,
	rowIndex,
	selectable,
}: {
	children: ReactNode;
	item: StaffMemberWithIndex;
	itemId: string;
	name: string;
	rowIndex: number;
	selectable?: boolean;
}) => {
	const { setSuccessMessageType, setUpdatedStaffMemberName } = useDataContext();
	const { staffMembersDelete, staffMembersUpdate } = useStaffGlobalState();
	const { isRowSelected, toggleRowSelected } = useSortAndFilterContext();

	const [removeModalOpen, setRemoveModalOpen] = useState(false);
	const [pauseModalOpen, setPauseModalOpen] = useState(false);
	const [modalChangeRoleOpen, setModalChangeRoleOpen] = useState(false);

	const onClickRemoveAccess = () => {
		setRemoveModalOpen(true);
	};
	const onClickPauseAccess = () => {
		setPauseModalOpen(true);
	};

	// TODO: bring back post-usability testing
	// const onClickChangeRoles = () => {
	// 	setModalChangeRoleOpen(true);
	// };

	const onConfirmRemove = () => {
		staffMembersDelete(item);
		setRemoveModalOpen(false);

		setUpdatedStaffMemberName?.(item.name);
		setSuccessMessageType?.('remove');
	};
	const onConfirmPause = () => {
		staffMembersUpdate({ staffToUpdate: item, updates: { status: 'Paused' } });
		setPauseModalOpen(false);

		setUpdatedStaffMemberName?.(item.name);
		setSuccessMessageType?.('pause');
	};
	const onConfirmChangeRole = () => {
		console.log('Change role');
		setModalChangeRoleOpen(false);
	};

	if (selectable) {
		return (
			<TableRow aria-rowindex={rowIndex} selected={isRowSelected(itemId)}>
				<TableCell>
					<Checkbox
						checked={isRowSelected(itemId)}
						onChange={() => toggleRowSelected(itemId)}
						size="sm"
					>
						<VisuallyHidden>{`Select ${name}`}</VisuallyHidden>
					</Checkbox>
				</TableCell>

				{children}

				<TableCell>
					<DropdownMenu>
						<DropdownMenuButton aria-describedby={`${itemId}-name`}>
							Actions
						</DropdownMenuButton>

						<DropdownMenuPanel>
							{/* This is not needed in the usability testing but is needed post-usability testing */}
							{/* <DropdownMenuItem onClick={onClickChangeRoles}>
								Change role
							</DropdownMenuItem> */}

							<DropdownMenuItem onClick={onClickPauseAccess}>
								Pause access
							</DropdownMenuItem>

							<DropdownMenuItem onClick={onClickRemoveAccess}>
								Remove access
							</DropdownMenuItem>
						</DropdownMenuPanel>
					</DropdownMenu>
				</TableCell>

				<ModalConfirmChangeRole
					currentRole={item.role}
					isOpen={modalChangeRoleOpen}
					onClose={() => setModalChangeRoleOpen(false)}
					onConfirm={onConfirmChangeRole}
				/>

				<ModalConfirmPauseAccess
					isOpen={pauseModalOpen}
					itemsToPause={item}
					onClose={() => setPauseModalOpen(false)}
					onConfirm={onConfirmPause}
				/>

				<ModalConfirmRemoveAccess
					isOpen={removeModalOpen}
					itemsToDelete={item}
					onClose={() => setRemoveModalOpen(false)}
					onConfirm={onConfirmRemove}
				/>
			</TableRow>
		);
	}

	return <TableRow aria-rowindex={rowIndex}>{children}</TableRow>;
};

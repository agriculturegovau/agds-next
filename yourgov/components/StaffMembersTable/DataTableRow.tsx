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
import { useSortAndFilterContext } from './lib/contexts';
import { ModalConfirmChangeRole } from './ModalConfirmChangeRole';
import { ModalConfirmPauseAccess } from './ModalConfirmPauseAccess';
import { ModalConfirmRemoveAccess } from './ModalConfirmRemoveAccess';
import { StaffMemberWithIndex } from './lib/types';

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
	name,
	children,
	item,
	itemId,
	rowIndex,
	selectable,
}: {
	name: string;
	children: ReactNode;
	item: StaffMemberWithIndex;
	itemId: string;
	rowIndex: number;
	selectable?: boolean;
}) => {
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
	const onClickChangeRoles = () => {
		setModalChangeRoleOpen(true);
	};

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

	if (selectable) {
		return (
			<TableRow aria-rowindex={rowIndex} selected={isRowSelected(itemId)}>
				<TableCell>
					<Checkbox
						size="sm"
						checked={isRowSelected(itemId)}
						onChange={() => toggleRowSelected(itemId)}
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
							<DropdownMenuItem onClick={onClickChangeRoles}>
								Change role
							</DropdownMenuItem>

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
					itemsToPause={item}
					isOpen={pauseModalOpen}
					onClose={() => setPauseModalOpen(false)}
					onConfirm={onConfirmPause}
				/>

				<ModalConfirmRemoveAccess
					itemsToDelete={item}
					isOpen={removeModalOpen}
					onClose={() => setRemoveModalOpen(false)}
					onConfirm={onConfirmRemove}
				/>
			</TableRow>
		);
	}

	return <TableRow aria-rowindex={rowIndex}>{children}</TableRow>;
};

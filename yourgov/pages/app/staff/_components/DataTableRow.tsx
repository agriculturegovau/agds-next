import { Flex } from '../../../../../packages/react/src/flex';
import { Avatar } from '../../../../../packages/react/src/avatar';
import { TableCell, TableRow } from '../../../../../packages/react/src/table';
import { Text } from '../../../../../packages/react/src/text';
import { Checkbox } from '../../../../../packages/react/src/checkbox';
import { VisuallyHidden } from '../../../../../packages/react/src/a11y';
import { StatusBadge } from '../../../../../packages/react/src/status-badge';
import { useSortAndFilterContext } from '../_lib/contexts';

export const DataTableRowAssignee = ({
	assignee,
}: {
	/** The name of the assignee, if set */
	assignee: string | undefined;
}) => {
	if (!assignee) {
		return <TableCell>-</TableCell>;
	}

	return (
		<TableCell>
			<Flex alignItems="center" gap={0.25}>
				<Avatar name={assignee} size="sm" aria-hidden />
				<Text>{assignee}</Text>
			</Flex>
		</TableCell>
	);
};

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
	itemId,
	rowIndex,
	selectable,
}: {
	name: string;
	children: React.ReactNode;
	itemId: string;
	rowIndex: number;
	selectable?: boolean;
}) => {
	const { isRowSelected, toggleRowSelected } = useSortAndFilterContext();

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
			</TableRow>
		);
	}

	return <TableRow aria-rowindex={rowIndex}>{children}</TableRow>;
};

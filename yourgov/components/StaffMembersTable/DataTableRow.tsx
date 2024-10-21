import { Flex } from '@ag.ds-next/react/src/flex';
import { Avatar } from '@ag.ds-next/react/src/avatar';
import { TableCell, TableRow } from '@ag.ds-next/react/src/table';
import { Text } from '@ag.ds-next/react/src/text';
import { Checkbox } from '@ag.ds-next/react/src/checkbox';
import { VisuallyHidden } from '@ag.ds-next/react/src/a11y';
import { StatusBadge } from '@ag.ds-next/react/src/status-badge';
import { useSortAndFilterContext } from './lib/contexts';

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

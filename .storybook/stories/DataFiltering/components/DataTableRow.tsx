import { Flex } from '../../../../packages/react/src/flex';
import { TableCell, TableRow } from '../../../../packages/react/src/table';
import { Text } from '../../../../packages/react/src/text';
import { Checkbox } from '../../../../packages/react/src/checkbox';
import { VisuallyHidden } from '../../../../packages/react/src/a11y';
import { StatusBadge } from '../../../../packages/react/src/status-badge';
import { useSortAndFilterContext } from '../lib/contexts';

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
				<Text>{assignee}</Text>
			</Flex>
		</TableCell>
	);
};

const itemStatusMap = {
	notBooked: {
		label: 'Not booked',
		tone: 'notStartedLow',
	},
	booked: {
		label: 'Booked',
		tone: 'infoMedium',
	},
	completed: {
		label: 'Completed',
		tone: 'successMedium',
	},
	cancelled: {
		label: 'Cancelled',
		tone: 'errorMedium',
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
	businessName,
	children,
	itemId,
	rowIndex,
	selectable,
}: {
	businessName: string;
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
						<VisuallyHidden>{`Select ${businessName}`}</VisuallyHidden>
					</Checkbox>
				</TableCell>
				{children}
			</TableRow>
		);
	}

	return <TableRow aria-rowindex={rowIndex}>{children}</TableRow>;
};

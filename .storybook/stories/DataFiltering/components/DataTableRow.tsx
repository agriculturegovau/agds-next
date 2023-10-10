import { Flex } from '@ag.ds-next/react/flex';
import { Avatar } from '@ag.ds-next/react/avatar';
import { TableCell, TableRow } from '@ag.ds-next/react/table';
import { Text } from '@ag.ds-next/react/text';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';
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
				<Avatar name={assignee} size="sm" aria-hidden />
				<Text>{assignee}</Text>
			</Flex>
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

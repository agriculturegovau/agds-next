import { Flex } from '@ag.ds-next/react/flex';
import { Avatar } from '@ag.ds-next/react/avatar';
import { TableCell } from '@ag.ds-next/react/table';
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

export const DataTableRowCheckbox = ({
	itemId,
	businessName,
}: {
	itemId: string;
	businessName: string;
}) => {
	const { isRowSelected, toggleRowSelected } = useSortAndFilterContext();
	return (
		<TableCell>
			<Checkbox
				size="sm"
				checked={isRowSelected(itemId)}
				onChange={() => toggleRowSelected(itemId)}
			>
				<VisuallyHidden>{`Select ${businessName}`}</VisuallyHidden>
			</Checkbox>
		</TableCell>
	);
};

import { Button, ButtonGroup } from '../../../../packages/react/src/button';
import {
	TableBatchActionsBar,
	TableBatchActionsTitle,
} from '../../../../packages/react/src/table';
import { plural } from '../../SelectableTableBatchActions/utils';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';

export const DataTableBatchActionsBar = () => {
	const { selection, clearRowSelections } = useSortAndFilterContext();

	const { updateData } = useDataContext();

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
							updateData?.({ batchItems: selection });
							clearRowSelections();
						}}
					>
						Mark as completed
					</Button>
					<Button
						variant="secondary"
						size="sm"
						onClick={() => {
							updateData?.({ batchItems: selection, isDeleted: true });
							clearRowSelections();
						}}
					>
						Delete
					</Button>
					<Button variant="tertiary" size="sm" onClick={clearRowSelections}>
						Cancel
					</Button>
				</ButtonGroup>
			</TableBatchActionsBar>
		);
	}

	return null;
};

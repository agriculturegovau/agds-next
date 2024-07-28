import { Button, ButtonGroup } from '../../../../packages/react/src/button';
import {
	TableBatchActionsBar,
	TableBatchActionsTitle,
} from '../../../../packages/react/src/table';
import { plural } from '../../SelectableTableBatchActions/utils';
import { useSortAndFilterContext } from '../lib/contexts';

export const DataTableBatchActionsBar = ({
	onClickDeleteBatch,
	onClickMarkCompletedBatch,
}: {
	onClickDeleteBatch?: (batchItems: string[]) => void;
	onClickMarkCompletedBatch?: (batchItems: string[]) => void;
}) => {
	const { selection, clearRowSelections } = useSortAndFilterContext();

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
							onClickMarkCompletedBatch?.(selection);
							clearRowSelections();
						}}
					>
						Mark as completed
					</Button>
					<Button
						variant="secondary"
						size="sm"
						onClick={() => {
							onClickDeleteBatch?.(selection);
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

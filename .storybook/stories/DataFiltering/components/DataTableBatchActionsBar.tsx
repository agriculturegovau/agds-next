import { Button, ButtonGroup } from '../../../../packages/react/src/button';
import {
	TableBatchActionsBar,
	TableBatchActionsTitle,
} from '../../../../packages/react/src/table';
import { plural } from '../../SelectableTableBatchActions/utils';
import { useSortAndFilterContext } from '../lib/contexts';

export const DataTableBatchActionsBar = () => {
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
						onClick={() => {
							console.log('Add tracking number');
							clearRowSelections();
						}}
						size="sm"
						variant="secondary"
					>
						Add tracking number
					</Button>
					<Button
						onClick={() => {
							console.log('Delete');
							clearRowSelections();
						}}
						size="sm"
						variant="secondary"
					>
						Delete
					</Button>
					<Button onClick={clearRowSelections} size="sm" variant="tertiary">
						Cancel
					</Button>
				</ButtonGroup>
			</TableBatchActionsBar>
		);
	}

	return null;
};

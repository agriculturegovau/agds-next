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
						variant="secondary"
						size="sm"
						onClick={() => {
							console.log('Add tracking number');
							clearRowSelections();
						}}
					>
						Add tracking number
					</Button>
					<Button
						variant="secondary"
						size="sm"
						onClick={() => {
							console.log('Delete');
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

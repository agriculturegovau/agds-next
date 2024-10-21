import { Button, ButtonGroup } from '@ag.ds-next/react/src/button';
import {
	TableBatchActionsBar,
	TableBatchActionsTitle,
} from '@ag.ds-next/react/src/table';
import { plural } from './lib/utils';
import { useSortAndFilterContext } from './lib/contexts';

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
							clearRowSelections();
						}}
					>
						Change role
					</Button>

					<Button
						variant="secondary"
						size="sm"
						onClick={() => {
							clearRowSelections();
						}}
					>
						Pause access
					</Button>

					<Button
						variant="secondary"
						size="sm"
						onClick={() => {
							clearRowSelections();
						}}
					>
						Remove access
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

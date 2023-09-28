import { Box } from '@ag.ds-next/react/box';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { useDataSelectionContext } from '../lib/contexts';

export const DataTableSelectAllCheckbox = () => {
	const {
		toggleAllRows,
		isSelectAllCheckboxChecked,
		isSelectAllCheckboxIndeterminate,
	} = useDataSelectionContext();
	return (
		<Box paddingLeft={0.75} paddingBottom={0.75} borderBottom>
			<Checkbox
				size="sm"
				checked={isSelectAllCheckboxChecked}
				indeterminate={isSelectAllCheckboxIndeterminate}
				onChange={toggleAllRows}
			>
				Select all rows
			</Checkbox>
		</Box>
	);
};

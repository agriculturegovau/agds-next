import { Box } from '../../../../../packages/react/box';
import { Switch } from '../../../../../packages/react/src/switch';
import { useSortAndFilterContext } from '../_lib/contexts';
import { tableId } from './DataTable';

export const FilterSwitchInput = () => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Box aria-label="Active users" role="search" paddingBottom={0.5}>
			<Switch
				aria-controls={tableId}
				checked={filters.activeUsers}
				label="Active users"
				onChange={(newValue) => {
					setFilter({
						activeUsers: newValue,
					});
				}}
			/>
		</Box>
	);
};

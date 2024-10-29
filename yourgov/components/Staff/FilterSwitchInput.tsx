import { Box } from '@ag.ds-next/react/box';
import { Switch } from '@ag.ds-next/react/src/switch';
import { useSortAndFilterContext } from './lib/contexts';
import { tableId } from './DataTable';

export const FilterSwitchInput = () => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Box paddingBottom={0.5}>
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

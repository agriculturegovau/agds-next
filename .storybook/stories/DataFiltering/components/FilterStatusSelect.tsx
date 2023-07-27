import { Select } from '@ag.ds-next/react/select';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DashboardTable';

export const FilterStatusSelect = () => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Select
			label="Status"
			placeholder="All"
			aria-controls={tableId}
			hideOptionalLabel
			options={[
				{ value: 'booked', label: 'Booked' },
				{ value: 'notBooked', label: 'Not booked' },
				{ value: 'completed', label: 'Completed' },
				{ value: 'cancelled', label: 'Cancelled' },
			]}
			value={filters.status || ''}
			onChange={(e) => {
				const value = e.target.value as
					| ''
					| 'booked'
					| 'notBooked'
					| 'completed'
					| 'cancelled';

				setFilter({
					status: value === '' ? undefined : value,
				});
			}}
		/>
	);
};

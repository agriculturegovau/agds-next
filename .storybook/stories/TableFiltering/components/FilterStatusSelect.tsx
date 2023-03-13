import { Select } from '@ag.ds-next/react/select';
import { GetDataFilters } from '../lib/getData';
import { tableId } from './DashboardTable';

export const FilterStatusSelect = ({
	filters,
	setFilters,
}: {
	filters: GetDataFilters;
	setFilters: (sort: GetDataFilters) => void;
}) => {
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

				setFilters({
					...filters,
					status: value === '' ? undefined : value,
				});
			}}
		/>
	);
};

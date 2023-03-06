import { Select } from '@ag.ds-next/react/select';
import { GetDataFilters } from '../lib/getData';

export const FilterStatusSelect = ({
	filters,
	setFilters,
	resetPagination,
}: {
	filters: GetDataFilters;
	setFilters: (sort: GetDataFilters) => void;
	resetPagination?: () => void;
}) => {
	return (
		<Select
			label="Status"
			placeholder="All"
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

				resetPagination && resetPagination();
				setFilters({
					...filters,
					status: value === '' ? undefined : value,
				});
			}}
		/>
	);
};

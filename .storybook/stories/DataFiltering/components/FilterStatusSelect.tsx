import { Select } from '../../../../packages/react/src/select';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

export const FilterStatusSelect = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Select
			aria-controls={tableId}
			block={block}
			hideOptionalLabel
			label="Status"
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
			options={[
				{ value: 'booked', label: 'Booked' },
				{ value: 'notBooked', label: 'Not booked' },
				{ value: 'completed', label: 'Completed' },
				{ value: 'cancelled', label: 'Cancelled' },
			]}
			placeholder="All"
			value={filters.status || ''}
		/>
	);
};

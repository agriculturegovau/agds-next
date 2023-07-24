import { Select } from '@ag.ds-next/react/select';
import { assignees } from '../lib/generateBusinessData';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DashboardTable';

export const FilterAssigneeSelect = () => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Select
			label="Assignee"
			placeholder="All"
			hideOptionalLabel
			aria-controls={tableId}
			options={assignees.map((option) => ({
				label: option,
				value: option,
			}))}
			value={filters.assignee || ''}
			onChange={(e) => {
				const value = e.target.value;
				setFilter({
					assignee: value === '' ? undefined : value,
				});
			}}
		/>
	);
};

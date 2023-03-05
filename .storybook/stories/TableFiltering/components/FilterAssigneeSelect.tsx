import { Select } from '@ag.ds-next/react/select';
import { GetDataFilters } from '../lib/getData';
import { assignees } from '../lib/generateBusinessData';

export const FilterAssigneeSelect = ({
	filters,
	setFilters,
	resetPagination,
}: {
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	resetPagination: () => void;
}) => {
	return (
		<Select
			label="Assignee"
			placeholder="All"
			hideOptionalLabel
			options={assignees.map((option) => ({
				label: option,
				value: option,
			}))}
			value={filters.assignee || ''}
			onChange={(e) => {
				const value = e.target.value;
				resetPagination();
				setFilters({
					...filters,
					assignee: value === '' ? undefined : value,
				});
			}}
		/>
	);
};

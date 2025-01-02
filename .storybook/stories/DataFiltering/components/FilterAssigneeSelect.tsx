import { Select } from '../../../../packages/react/src/select';
import { assignees } from '../lib/generateBusinessData';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

export const FilterAssigneeSelect = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Select
			aria-controls={tableId}
			block={block}
			hideOptionalLabel
			label="Assignee"
			onChange={(e) => {
				const value = e.target.value;
				setFilter({
					assignee: value === '' ? undefined : value,
				});
			}}
			options={assignees.map((option) => ({
				label: option,
				value: option,
			}))}
			placeholder="All"
			value={filters.assignee || ''}
		/>
	);
};

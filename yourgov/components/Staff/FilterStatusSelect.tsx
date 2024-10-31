import { Select } from '@ag.ds-next/react/src/select';
import { useSortAndFilterContext } from './lib/contexts';
import { StaffMemberStatus } from './lib/types';
import { tableId } from './DataTable';

export const FilterStatusSelect = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Select
			label="Status"
			placeholder="All"
			aria-controls={tableId}
			hideOptionalLabel
			block={block}
			options={[
				{ value: 'Active', label: 'Active' },
				{ value: 'Invited', label: 'Invited' },
				{ value: 'Paused', label: 'Paused' },
			]}
			value={filters.status || ''}
			onChange={(event) => {
				const value = event.target.value as '' | StaffMemberStatus;

				setFilter({
					status: value === '' ? undefined : value,
				});
			}}
		/>
	);
};

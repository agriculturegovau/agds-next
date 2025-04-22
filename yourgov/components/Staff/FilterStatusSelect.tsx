import { Select } from '@ag.ds-next/react/src/select';
import { useSortAndFilterContext } from './lib/contexts';
import { StaffMemberStatus } from './lib/types';
import { tableId } from './DataTable';

export const FilterStatusSelect = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Select
			aria-controls={tableId}
			block={block}
			hideOptionalLabel
			label="Status"
			onChange={(event) => {
				const value = event.target.value as '' | StaffMemberStatus;

				setFilter({
					status: value === '' ? undefined : value,
				});
			}}
			options={[
				{ value: 'Active', label: 'Active' },
				{ value: 'Invited', label: 'Invited' },
				{ value: 'Paused', label: 'Paused' },
			]}
			placeholder="All"
			value={filters.status || ''}
		/>
	);
};

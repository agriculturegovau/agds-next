import { Select } from '@ag.ds-next/react/src/select';
import { StaffMember } from './lib/types';
import { useSortAndFilterContext } from './lib/contexts';
import { tableId } from './DataTable';

export const SortBySelect = () => {
	const { sort, setSort } = useSortAndFilterContext();

	return (
		<Select
			label="Sort by"
			hideOptionalLabel
			options={[
				{
					value: 'name-ASC',
					label: 'Name (A-Z)',
				},
				{
					value: 'name-DESC',
					label: 'Name (Z-A)',
				},
				{
					value: 'role-ASC',
					label: 'Role (A-Z)',
				},
				{
					value: 'role-DESC',
					label: 'Role (Z-A)',
				},
				{
					value: 'status-ASC',
					label: 'Status (A-Z)',
				},
				{
					value: 'status-DESC',
					label: 'Status (Z-A)',
				},
				{
					value: 'lastActive-ASC',
					label: 'Last active (oldest first)',
				},
				{
					value: 'lastActive-DESC',
					label: 'Last active (newest first)',
				},
				{
					value: 'dateJoined-ASC',
					label: 'Date joined (oldest first)',
				},
				{
					value: 'dateJoined-DESC',
					label: 'Date joined (newest first)',
				},
			]}
			value={`${sort.field}-${sort.order}`}
			aria-controls={tableId}
			onChange={(e) => {
				const [field, order] = e.target.value.split('-');
				setSort({
					field: field as keyof StaffMember,
					order: order as 'ASC' | 'DESC',
				});
			}}
		/>
	);
};

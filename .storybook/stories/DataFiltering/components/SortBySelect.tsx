import { Select } from '../../../../packages/react/src/select';
import { BusinessForAudit } from '../lib/generateBusinessData';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

export const SortBySelect = () => {
	const { sort, setSort } = useSortAndFilterContext();

	return (
		<Select
			aria-controls={tableId}
			hideOptionalLabel
			label="Sort by"
			onChange={(e) => {
				const [field, order] = e.target.value.split('-');
				setSort({
					field: field as keyof BusinessForAudit,
					order: order as 'ASC' | 'DESC',
				});
			}}
			options={[
				{
					value: 'businessName-ASC',
					label: 'Business name (A-Z)',
				},
				{
					value: 'businessName-DESC',
					label: 'Business name (Z-A)',
				},
				{
					value: 'assignee-ASC',
					label: 'Assignee (A-Z)',
				},
				{
					value: 'assignee-DESC',
					label: 'Assignee (Z-A)',
				},
				{
					value: 'requestDate-ASC',
					label: 'Date registered (oldest first)',
				},
				{
					value: 'requestDate-DESC',
					label: 'Date registered (newest first)',
				},
				{
					value: 'status-ASC',
					label: 'Status (A-Z)',
				},
				{
					value: 'status-DESC',
					label: 'Status (Z-A)',
				},
			]}
			value={`${sort.field}-${sort.order}`}
		/>
	);
};

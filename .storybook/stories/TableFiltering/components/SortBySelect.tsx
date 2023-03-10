import { Select } from '@ag.ds-next/react/select';
import { GetDataSort } from '../lib/getData';
import { BusinessForAudit } from '../lib/generateBusinessData';
import { tableId } from './DashboardTable';

export const SortBySelect = ({
	sort,
	setSort,
	resetPagination,
}: {
	sort: GetDataSort;
	setSort: (sort: GetDataSort) => void;
	resetPagination: () => void;
}) => {
	return (
		<Select
			label="Sort by"
			hideOptionalLabel
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
					value: 'numberOfEmployees-ASC',
					label: 'Number of employees (lowest first)',
				},
				{
					value: 'numberOfEmployees-DESC',
					label: 'Number of employees (highest first)',
				},
				{
					value: 'requestDate-ASC',
					label: 'Date registered (oldest first)',
				},
				{
					value: 'requestDate-DESC',
					label: 'Date registered (newest first)',
				},
			]}
			value={`${sort.field}-${sort.order}`}
			aria-controls={tableId}
			onChange={(e) => {
				const [field, order] = e.target.value.split('-');
				resetPagination();
				setSort({
					field: field as keyof BusinessForAudit,
					order: order as 'ASC' | 'DESC',
				});
			}}
		/>
	);
};

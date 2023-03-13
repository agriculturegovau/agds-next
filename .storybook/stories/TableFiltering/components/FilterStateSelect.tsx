import { Select } from '@ag.ds-next/react/select';
import { GetDataFilters } from '../lib/getData';
import { tableId } from './DashboardTable';

export const FilterStateSelect = ({
	filters,
	setFilters,
	resetPagination,
}: {
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	resetPagination?: () => void;
}) => {
	return (
		<Select
			label="State"
			placeholder="All"
			hideOptionalLabel
			options={[
				{ value: 'act', label: 'ACT' },
				{ value: 'nsw', label: 'NSW' },
				{ value: 'nt', label: 'NT' },
				{ value: 'qld', label: 'QLD' },
				{ value: 'sa', label: 'SA' },
				{ value: 'tas', label: 'TAS' },
				{ value: 'vic', label: 'VIC' },
				{ value: 'wa', label: 'WA' },
			]}
			value={filters.state || ''}
			aria-controls={tableId}
			onChange={(e) => {
				const value = e.target.value;
				resetPagination && resetPagination();
				setFilters({
					...filters,
					state: value === '' ? undefined : value,
				});
			}}
		/>
	);
};

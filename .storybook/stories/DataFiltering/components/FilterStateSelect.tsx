import { Select } from '@ag.ds-next/react/select';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DashboardTable';

export const FilterStateSelect = () => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Select
			label="State"
			placeholder="All"
			hideOptionalLabel
			options={STATE_OPTIONS}
			value={filters.state || ''}
			aria-controls={tableId}
			onChange={(e) => {
				const value = e.target.value;
				setFilter({
					state: value === '' ? undefined : value,
				});
			}}
		/>
	);
};

export const STATE_OPTIONS = [
	{ value: 'act', label: 'ACT' },
	{ value: 'nsw', label: 'NSW' },
	{ value: 'nt', label: 'NT' },
	{ value: 'qld', label: 'QLD' },
	{ value: 'sa', label: 'SA' },
	{ value: 'tas', label: 'TAS' },
	{ value: 'vic', label: 'VIC' },
	{ value: 'wa', label: 'WA' },
];

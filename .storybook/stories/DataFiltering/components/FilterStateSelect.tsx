import { Select } from '../../../../packages/react/src/select';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

export const FilterStateSelect = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<Select
			aria-controls={tableId}
			block={block}
			hideOptionalLabel
			label="State"
			onChange={(e) => {
				const value = e.target.value;
				setFilter({
					state: value === '' ? undefined : value,
				});
			}}
			options={STATE_OPTIONS}
			placeholder="All"
			value={filters.state || ''}
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

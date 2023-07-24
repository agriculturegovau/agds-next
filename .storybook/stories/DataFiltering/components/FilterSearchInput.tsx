import { SearchInput } from '@ag.ds-next/react/search-input';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DashboardTable';

export const FilterSearchInput = () => {
	const { filters, setFilters } = useSortAndFilterContext();

	return (
		<SearchInput
			label="Search Business name"
			aria-controls={tableId}
			maxWidth="lg"
			hideOptionalLabel
			value={filters.businessName}
			onChange={(searchString) => {
				// TODO debounce
				setFilters({
					...filters,
					businessName: searchString,
				});
			}}
		/>
	);
};

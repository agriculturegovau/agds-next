import { SearchInput } from '@ag.ds-next/react/search-input';
import { GetDataFilters } from '../lib/getData';
import { tableId } from './DashboardTable';

export const FilterSearchInput = ({
	filters,
	setFilters,
}: {
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
}) => {
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

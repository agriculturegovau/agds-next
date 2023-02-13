import { SearchInput } from '@ag.ds-next/react/search-input';
import { GetDataFilters } from '../lib/data';

export const DashboardSearchInput = ({
	filters,
	setFilters,
}: {
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
}) => {
	return (
		<SearchInput
			label="Search Business name"
			maxWidth="lg"
			hideOptionalLabel
			value={filters.businessName}
			onChange={(searchString) => {
				// debounce
				setFilters({
					...filters,
					businessName: searchString,
				});
			}}
		/>
	);
};

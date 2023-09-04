import { SearchInput } from '@ag.ds-next/react/search-input';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

export const FilterSearchInput = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<SearchInput
			label="Search Business name"
			aria-controls={tableId}
			maxWidth="lg"
			hideOptionalLabel
			block={block}
			value={filters.businessName || ''}
			onChange={(searchString) => {
				// TODO debounce
				setFilter({
					businessName: searchString,
				});
			}}
		/>
	);
};

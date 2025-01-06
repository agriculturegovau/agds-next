import { SearchInput } from '@ag.ds-next/react/src/search-input';
import { useSortAndFilterContext } from './lib/contexts';
import { tableId } from './DataTable';

export const FilterSearchInput = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<div aria-label="Staff members" role="search">
			<SearchInput
				aria-controls={tableId}
				block={block}
				hideOptionalLabel
				label="Search name"
				maxWidth="lg"
				onChange={(searchString) => {
					setFilter({
						name: searchString,
					});
				}}
				value={filters.name || ''}
			/>
		</div>
	);
};

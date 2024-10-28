import { SearchInput } from '@ag.ds-next/react/src/search-input';
import { useSortAndFilterContext } from './lib/contexts';
import { tableId } from './DataTable';

export const FilterSearchInput = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<div aria-label="Staff members" role="search">
			<SearchInput
				label="Search name"
				aria-controls={tableId}
				maxWidth="lg"
				hideOptionalLabel
				block={block}
				value={filters.name || ''}
				onChange={(searchString) => {
					setFilter({
						name: searchString,
					});
				}}
			/>
		</div>
	);
};

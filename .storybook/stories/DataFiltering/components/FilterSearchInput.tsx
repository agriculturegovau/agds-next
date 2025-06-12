import { SearchInput } from '../../../../packages/react/src/search-input';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

export const FilterSearchInput = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<div aria-label="Audits" role="search">
			<SearchInput
				aria-controls={tableId}
				block={block}
				hideOptionalLabel
				label="Search"
				maxWidth="lg"
				onChange={(searchString) => {
					// TODO debounce
					setFilter({ search: searchString });
				}}
				value={filters.search || ''}
			/>
		</div>
	);
};

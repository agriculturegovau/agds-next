import { SearchInput } from '../../../../../packages/react/src/search-input';
import { useSortAndFilterContext } from '../_lib/contexts';
import { tableId } from './DataTable';

export const FilterSearchInput = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();

	return (
		<div aria-label="Active users" role="search">
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

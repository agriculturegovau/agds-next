import {
	ComboboxMulti,
	COUNTRY_OPTIONS,
} from '../../../../docs/components/designSystemComponents';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

export const FilterDestinationsSelect = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();
	return (
		<ComboboxMulti
			label="Destinations"
			hint="Start typing to see results"
			options={COUNTRY_OPTIONS}
			hideOptionalLabel
			block={block}
			aria-controls={tableId}
			value={filters.destinations ?? []}
			onChange={(countries) => {
				setFilter({
					destinations: countries,
				});
			}}
		/>
	);
};

import { ComboboxMulti } from '../../../../packages/react/src/combobox';
import { COUNTRY_OPTIONS } from '../../../../docs/components/designSystemComponents';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

export const FilterDestinationsSelect = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();
	return (
		<ComboboxMulti
			aria-controls={tableId}
			block={block}
			hideOptionalLabel
			hint="Start typing to see results"
			label="Destinations"
			onChange={(selectedCountries) => {
				setFilter({
					destinations: selectedCountries.map(({ label }) => label),
				});
			}}
			options={COUNTRY_OPTIONS}
			value={(filters.destinations ?? []).map((country) => ({
				label: country,
				value: country,
			}))}
		/>
	);
};
